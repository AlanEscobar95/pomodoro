const {Router} = require('express');
const router = Router();

const {renderTareaForm,crearNuevaTarea,renderTareas,
       renderEditForm,actualizarTarea,deleteTarea} = require('../controllers/tareas.controller');

const {isAuthenticated} = require('../helpers/auth');

// Nueva Tarea
router.get('/tareas/add', isAuthenticated, renderTareaForm);
router.post('/tareas/nueva-tarea',isAuthenticated,crearNuevaTarea);

// Obtener todas las tareas
router.get('/tareas',isAuthenticated,renderTareas); 

// Editar Tarea
router.get('/tareas/editar/:id',isAuthenticated, renderEditForm);

// Actualizar tarea
router.put('/tareas/actualizar/:id',isAuthenticated, actualizarTarea);

// Eliminar Tarea
router.delete('/tareas/delete/:id',isAuthenticated, deleteTarea );


module.exports = router;