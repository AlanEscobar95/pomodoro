const tareasCtrl = {};
const pool = require("../dataBase/dataBase.sql");
Tareas = require('../models/tareas');
tareasCtrl.renderTareaForm = (req, res) => {
    res.render('tareas/nueva-tarea');
};

tareasCtrl.crearNuevaTarea = async (req, res) => {
    const { nombre, descripcion, estado } = req.body;
    try {
        const query = "INSERT INTO tareas(nombre, descripcion, estado) VALUES (?, ?, ?)";
        await pool.query(query, [nombre, descripcion, estado]);
        res.redirect('/tareas');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la tarea');
    }
};

tareasCtrl.renderTareas = async (req, res) => {
    const tareas = await pool.query("SELECT * FROM tareas");
    res.render('tareas/lista-tareas', { tareas });
};

    tareasCtrl.renderEditForm = async (req, res) => {
        const taskId = req.params.id;
        try {
            const query = "SELECT id,nombre, descripcion, estado FROM tareas WHERE id = ?";
            const [tarea] = await pool.query(query, [taskId]);
            res.render('tareas/editar-tareas', { tarea });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener la tarea');
        }
    };
    

tareasCtrl.actualizarTarea = async(req, res) => {
    const taskId = req.params.id;
    const { nombre, descripcion, estado } = req.body;
    try {
        const query = "UPDATE tareas SET nombre = ?, descripcion = ?, estado = ? WHERE id = ?";
        await pool.query(query, [nombre, descripcion, estado, taskId]);
        res.redirect('/tareas');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar la tarea');
    }
     }

tareasCtrl.deleteTarea = async (req, res) => {
    const taskId = req.params.id;
    try {
        const query = "DELETE FROM tareas WHERE id = ?";
        await pool.query(query, [taskId]);
        res.redirect('/tareas');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar la tarea');
    }
};

module.exports = tareasCtrl;