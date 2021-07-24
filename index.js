//Declaracion de instancias
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PUERTO;
//Fin declaraciones

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rutas servicios


router.get('/', (req, res) => {
  res.send('Hola Profe!')
});
//Fin rutas servicios

//Conexion DB Mongoose
mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conectado a la DB")
});
//Fin Conexion DB Mongoose


//Prefijo para backend
app.use('/backend-evaluacion',router)

app.listen(port, () => {
  console.log(`El servidor corre en http://localhost:${port}`)
})

