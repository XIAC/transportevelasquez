// const mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: 'transportevelasquez'
//   });
  
//   con.connect(function(err) {
//     if (err) {
//         console.log('Error en la conexion', err);
//         return;
//     };
//     console.log("Conexion Exitosa!");
//     const sql = 'SELECT * FROM camion';
//     con.query(sql, function (err, result) {
//         if (err) {
//             console.log('Erro en la consulta', err);
//             return;
//         };
//         // console.log(result);
//         console.table(result);
//       });
// });