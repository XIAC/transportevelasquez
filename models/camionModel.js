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
        console.log(result);
        callback(null, result);
      });
}    


    