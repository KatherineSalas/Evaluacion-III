const express = require('express');
const router = express.Router();
const controlador = require('../servicios/usuarios/controlador');


router.post('/crear-usuarios ',controlador.Crearusuario);
router.get('/obtener-usuarios',controlador.Obtenerusuario);

module.exports = router;