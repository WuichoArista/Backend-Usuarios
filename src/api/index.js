const express = require('express');
const ruta = express.Router();
const rutaUsuarios = require('./usuarios')

ruta.use('/usuarios' , rutaUsuarios);

module.exports = ruta;