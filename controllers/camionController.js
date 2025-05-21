const camionModel = require('../models/camionModel');
exports.listarCamiones = (req, res) => {
    camionModel.obtenerTodosCamiones((err, camiones) => {
        if (err) {
            return res.status(500).send('Error al obtener los camiones!')
        }
        console.log(camiones);
        res.render('camion/index', { camiones })
    });
};