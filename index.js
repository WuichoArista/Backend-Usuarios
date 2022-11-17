require('dotenv').config();
const app = require('./src/index');
const mongoose = require('./src/db/mongodb.js')

const PORT = process.env.PORT;

app.listen( PORT , ( req , res ) => {
    console.clear();
    console.log(`Servidor funcionando en puerto ${PORT}`);
    mongoose.connect;
});