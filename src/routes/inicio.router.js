// inicio.router.js

const express = require('express');
const router = express.Router();

const { mostrar } = require('../controllers/inicio.controller.js');
const inicioCtl = require('../controllers/inicio.controller.js');

router.get('/', mostrar);
router.get('/sigin',inicioCtl);


module.exports = router;
