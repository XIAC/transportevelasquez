const express = require('express');
const router = express.Router();
const camionController = require('../controllers/camionController');

router.get('/', camionController.listarCamiones);
router.get('/reporte/camionesnoutilizados', camionController.reporteCamionesNoUtilizados);

module.exports = router;