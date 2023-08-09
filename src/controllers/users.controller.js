const usersCtrl = {};
const passport = require('passport');
const bcrypt = require('bcrypt');
const pool = require("../dataBase/dataBase.sql");

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const { nombre, correo, password, confirm_password } = req.body;
    const errors = [];

    if (password !== confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden' });
    }

    if (password.length < 8) {
        errors.push({ text: 'La contraseña debe tener al menos 8 caracteres' });
    }

    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            nombre,
            correo,
            password,
            confirm_password,
        });
    } else {
        try {

            // Verificar si el correo electrónico ya está en uso
            const existingUser = await pool.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);

            if (existingUser.length > 0) {
                errors.push({ text: 'El correo electrónico ya está registrado' });


                res.render('users/signup', {
                    errors,
                    nombre,
                    correo,
                    password,
                    confirm_password,
                });
            } else {
                // Cifrar la contraseña
                const hashedPassword = await bcrypt.hash(password, 10);

                // Guardar el usuario en la base de datos
                const query = 'INSERT INTO usuarios(nombre, correo, password) VALUES (?, ?, ?)';
                await pool.query(query, [nombre, correo, hashedPassword]);
                req.flash('success_msg', 'Usuario creado exitosamente');
                res.redirect('/users/signin');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el usuario');
        }
    }
};

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
        failureRedirect: '/users/signin',
        successRedirect: '/tareas',
        failureFlash: true
    });


usersCtrl.logout = (req, res) => {
    req.logout(function(err) {
        if (err) {
          console.error(err);
          return res.status(500).send('Error al cerrar la sesión');
        }
        req.flash('success_msg', 'Sesión cerrada exitosamente');
        res.redirect('/users/signin');
      });
};
module.exports = usersCtrl;