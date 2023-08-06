const tareasCtrl = {};
const pool = require("../dataBase/dataBase.sql"); 

tareasCtrl.renderTareaForm = (req, res) => {
    res.render('tareas/nueva-tarea');
};

tareasCtrl.crearNuevaTarea = async (req, res) => {
    const { nombre, descripcion, estado } = req.body;
    try {
        const query = "INSERT INTO tareas(nombre, descripcion, estado) VALUES (?, ?, ?)";
        await pool.query(query, [nombre, descripcion, estado]);
        res.send('Nueva tarea creada exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la tarea');
    }
};

tareasCtrl.renderTareas = async(req, res) => {
    const tareas = await pool.query("SELECT * FROM tareas");
    res.render('tareas/lista-tareas', { tareas });
}; 

tareasCtrl.renderEditarTarea = (req, res) => {
    res.send('render editar tarea');
};

tareasCtrl.actualizarTarea = (req, res) => {
    res.send('actualizar tarea');
};

tareasCtrl.eliminarTarea = (req, res) => {
    res.send('eliminar tarea');
};

module.exports = tareasCtrl;
