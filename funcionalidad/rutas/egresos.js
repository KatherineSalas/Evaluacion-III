const express = require('express');
const router = express.Router();
const controlador = require('../servicios/egresos/controlador');


router.post('/crear-egreso ',controlador.crearEgresos);
router.get('/obtener-egresos',controlador.obtenerEgresos);

module.exports = router;
