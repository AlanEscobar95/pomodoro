const {Router} = require('express');
const router = Router();

const {renderTareaForm,crearNuevaTarea,renderTareas,
       renderEditarTarea,actualizarTarea,eliminarTarea} = require('../controllers/tareas.controller');

// Nueva Tarea
router.get('/tareas/add',renderTareaForm);
router.post('/tareas/nueva-tarea',crearNuevaTarea);

// Obtener todas las tareas
router.get('/tareas',renderTareas); 

// Editar Tarea
router.get('/tareas/edit/:id',renderEditarTarea);
router.put('/tareas/edit/:id',actualizarTarea);

// Eliminar Tarea
router.delete('/tareas/delete/:id',eliminarTarea);

module.exports = router;