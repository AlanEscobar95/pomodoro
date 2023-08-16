const {Router} = require('express');
const router = Router();

const {renderBreak,renderShortBreak,renderLongBreak} = require('../controllers/breaks.controller');

const {renderTareaForm} = require('../controllers/tareas.controller');

const {isAuthenticated} = require('../helpers/auth');

router.get('/tareas/add', isAuthenticated, renderTareaForm);
router.get('/breaks/break',isAuthenticated,renderBreak);
router.get('/breaks/short-break',isAuthenticated,renderShortBreak);
router.get('/breaks/long-break',isAuthenticated,renderLongBreak);

module.exports = router;