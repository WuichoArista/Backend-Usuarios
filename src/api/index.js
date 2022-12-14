const express = require('express');
const ruta = express.Router();
const rutaUsuarios = require('./usuarios')
const rutaPublica = require('./publica')
const rutaAutenticadoAutorizado = require('./autenticado-autorizado')
const rutaArchivos = require('./archivos.routes')
const rutaRoles = require('./role.routes')

ruta.use('/autenticado-autorizado' , rutaAutenticadoAutorizado);
ruta.use('/publica' , rutaPublica);
ruta.use('/usuarios' , rutaUsuarios);
ruta.use('/archivos' , rutaArchivos);
ruta.use('/role' , rutaRoles);

module.exports = ruta;