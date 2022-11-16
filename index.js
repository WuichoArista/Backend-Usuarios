const app = require('./src/index');
const mongoose = require('./src/mongodb/mongodb.js')
require('dotenv').config();

const PORT = process.env.PORT;

app.listen( PORT , ( req , res ) => {
    console.clear()
    console.log(`Servidor funcionando en puerto ${PORT}`);
    mongoose.connect
});