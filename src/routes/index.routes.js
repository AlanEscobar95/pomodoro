const {Router} = require('express');
const router = Router();

const {renderIndex,renderLogin,renderBienvenida} = require('../controllers/index.controller.js');

const {isAuthenticated} = require('../helpers/auth');

router.get('/',renderIndex );
router.get('/login',renderLogin);
router.get('/bienvenida',isAuthenticated,renderBienvenida)

module.exports = router;