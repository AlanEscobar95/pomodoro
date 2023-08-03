const inicioCtl = {};
const orm = require('../Database/dataBase.orm');

inicioCtl.mostrar = async (req, res) => {
    try {
        // Obtener la lista de usuarios desde la base de datos
        const listaUsuarios = await orm.usuarios.findAll();
        
        // Convertir los objetos Sequelize en objetos planos para saltar la advertencia de seguridad de handlebars
        const usuariosPlano = listaUsuarios.map(usuario => usuario.get({ plain: true }));

        // Renderizar la vista "inicio.handlebars"
        res.render('inicio', { lista: usuariosPlano });
    } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
        res.status(500).send("Error al obtener la lista de usuarios");
    }
};

module.exports = inicioCtl;
