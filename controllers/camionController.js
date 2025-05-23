const camionModel = require('../models/camionModel');
exports.listarCamiones = (req, res) => {
    camionModel.obtenerTodosCamiones((err, camiones) => {
        if (err) {
            return res.status(500).send('Error al obtener los camiones!')
        }
        res.render('camion/index', { camiones })
    });
};

exports.reporteCamionesNoUtilizados = (req, res) => {
    console.log("resultado de request",req);
    const { fechaInicio, fechaFinal }  = req.query;

    camionModel.obtenerCamionesNoUtilizados(fechaInicio, fechaFinal, (err, dato) => {
        if (err) {
            return res.status(500).send('Error al obtener los camiones no utilizados!')
        }
        
        res.render('camion/camionesNoUtilizados.ejs', { camiones: dato })
    });
};