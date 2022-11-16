const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;


mongoose.connect( MONGODB_URL , {} , () => {
    console.log('Conectado a la base de datos con exito :)')
});

mongoose.connection.on('open' , () => {
    console.log('Conectando a BD...')
})

module.exports = mongoose