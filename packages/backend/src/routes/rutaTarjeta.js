const express = require('express');
const router = express.Router();
const tarjetaController = require('../controllers/controladorTarjeta');

router.post('/tarjeta', tarjetaController.getCard);
router.get('/tarjetas', tarjetaController.getCards);

module.exports = router;