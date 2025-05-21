const express = require('express');
const router = express.Router();
const camionController = require('../controllers/camionController');

router.get('/', camionController.listarCamiones);

module.exports = router;