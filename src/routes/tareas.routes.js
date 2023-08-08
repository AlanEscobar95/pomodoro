const {Router} = require('express');
const router = Router();

const {renderTareaForm,crearNuevaTarea,renderTareas,
       renderEditForm,actualizarTarea,deleteTarea} = require('../controllers/tareas.controller');

// Nueva Tarea
router.get('/tareas/add',renderTareaForm);
router.post('/tareas/nueva-tarea',crearNuevaTarea);

// Obtener todas las tareas
router.get('/tareas',renderTareas); 

// Editar Tarea
router.get('/tareas/editar/:id', renderEditForm);

// Actualizar tarea
router.post('/tareas/actualizar/:id', actualizarTarea);

// Eliminar Tarea
router.delete('/tareas/delete/:id', deleteTarea );


module.exports = router;