const express = require('express');
const ruta = express.Router();

ruta.get('/' , ( req , res ) => {
    res.send('Estas conectado a la api')
})

module.exports = ruta