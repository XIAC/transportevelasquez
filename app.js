const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// camion rutas
const camionRutas = require('./routes/camionRoute');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', camionRutas);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})