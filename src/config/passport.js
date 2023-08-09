const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt'); // Import bcrypt module

const pool = require("../dataBase/dataBase.sql");

passport.use(new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'password',
    passReqToCallback: true // Pass req as an argument to the callback
}, async (req, correo, password, done) => {
    try {
        // Comprobar si el correo existe
        const existingUser = await pool.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);
        if (existingUser.length > 0) {
            const user = existingUser[0];
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                done(null, user);
            } else {
                done(null, false, {message: 'Contraseña incorrecta'});
            }
        } else {
            return done(null, false, {message: 'El correo electrónico no está registrado'});
        }
    } catch (err) {
        return done(err); 
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const existingUser = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        done(null, existingUser[0]);
    } catch (err) {
        done(err);
    }
});
