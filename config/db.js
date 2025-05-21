const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'transportevelasquez'
  });
  
  conexion.connect(function(err) {
    if (err) {
        console.log('Error en la conexion', err);
        return;
    };
    console.log("Conexion Exitosa!");

});
module.exports = conexion;