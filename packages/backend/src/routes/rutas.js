const express = require('express');
const router = express.Router();
const tarjetaController = require('../controllers/controladorTarjeta');
const controladorUsuario = require('../controllers/controladorUsuario');

//router.post('/tarjeta', tarjetaController.getCard);
router.get('/tarjetas', tarjetaController.getTarjetas);
router.post('/usuario', controladorUsuario.getUser);


module.exports = router;