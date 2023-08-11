const pool = require("../dataBase/dataBase.sql");
const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.renderLogin = (req, res) => {
    res.render('signin');
};

indexCtrl.renderBienvenida = async (req, res) => {
    try {
        const usuario = await pool.query("SELECT * FROM usuarios WHERE id = ?", [req.user.id]);
        if (usuario.length > 0) {
            res.render('bienvenida', { nombre: usuario[0].nombre }); 
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el nombre del usuario');
    }
};


module.exports = indexCtrl;