const express = require('express');
const router = express.Router();
const camionController = require('../controllers/camionController');

router.get('/', camionController.listarCamiones);
router.get('/reporte/reporte-camiones-no-utilizados', camionController.reporteCamionesNoUtilizados);
router.get('/reporte/reportePedidosPorMesAnio', camionController.reportePedidosPorMesAnio);
router.get('/reporte/transportePorCamion', camionController.reporteTransportePorCamion);
// router.get('/reporte', (req, res) => {
//     res.send('Hello World!')
//   })
module.exports = router;