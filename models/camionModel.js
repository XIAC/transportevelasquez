const db = require('../config/db');
    
// query para obtener todos los camiones
exports.obtenerTodosCamiones = (callback) => {
    const sql = 'SELECT * FROM camion';
    db.query(sql, function (err, result) {
        if (err) {
            console.log('Error en la consulta', err);
            return;
        };
        callback(null, result);
      });
}    

exports.obtenerCamionesNoUtilizados = (fechaInicio, fechaFinal, callback) => {
    const sql = 'CALL CamionesNoUtilizados (?,?)';
    db.query(sql, [fechaInicio, fechaFinal],function (err, result) {
        if (err) {
            console.log('Error en la consulta', err);
            return;
        };
        callback(null, result[0]);
      });
}    

exports.obtenerPedidosMesAnio = (anio, mes, callback) => {
    const sql = 'CALL ReportePedidosPorMesAnio (?,?)';
    db.query(sql, [anio, mes],function (err, resultado) {
        if (err) {
            console.log('Error en la consulta', err);
            return;
        };
        callback(null, resultado[0]);
      });
}    

exports.obtenerTransportePorCamion = (fechaInicio, fechaFinal, callback) => {
    const sql = 'CALL ReporteTransportadoPorCamion (?,?)';
    db.query(sql, [fechaInicio, fechaFinal], (err, resultado) => {
        if (err) {
            callback(err)
            return;
        };
        callback(null, resultado[0]);
      });
}    


    