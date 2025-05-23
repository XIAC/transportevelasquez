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
    const { fechaInicio, fechaFinal }  = req.query;

    camionModel.obtenerCamionesNoUtilizados(fechaInicio, fechaFinal, (err, dato) => {
        if (err) {
            return res.status(500).send('Error al obtener los camiones no utilizados!')
        }
        res.render('camion/camionesNoUtilizados', { camiones: dato })
    });
};


exports.reportePedidosPorMesAnio = (req, res) => {
    const { anio, mes }  = req.query;

    camionModel.obtenerPedidosMesAnio(anio, mes, (err, dato) => {
        if (err) {
            return res.status(500).send('Error al obtener los camiones no utilizados!')
        }
        res.render('camion/pedidoPorMesAnio', { pedidos: dato })
    });
};

exports.reporteTransportePorCamion = (req, res) => {
    const { fechaInicio, fechaFinal }  = req.query;

    camionModel.obtenerTransportePorCamion(fechaInicio, fechaFinal, (err, dato) => {
        if (err) {
            return res.status(500).send('Error al obtener los camiones no utilizados!')
        }
        res.render('camion/transportPorCamion', { cargas: dato })
    });
};