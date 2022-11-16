const express = require('express');
const cors = require('cors');
const ApiRuta = require('./api')

const app = express();

app.use(cors());
app.use(express.json());
app.use( '/api' , ApiRuta)

module.exports = app
