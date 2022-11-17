const express = require('express');
const ruta = express.Router();

ruta.get( '/' , ( req , res) => {
    const {nombre} = req.query;

    res.status(200).send(
        `<body style="margin:0; text-align:center;">
            <h1 style=" padding:20px; background: #2B2A37; color:#fff; text-align:center; margin:0; ">Bienvenido a la parte Publica</h1>
            <h2 style="text-align: center;">Pasa por Query Params tu nombre</h2>
            <p style="text-align: center;">Ejemplo: agregale al url: ?nombre=tu Nombre o /tu Nombre</p>
            ${
                nombre ? `<h3 style="text-align: center;">Hola ${nombre}</h3>` : ''
            }
        </body>
        `
    );
});

ruta.get( '/:nombre' , ( req , res) => {
    const {nombre} = req.params;

    res.status(200).send(
        `<body style="margin:0; text-align:center;">
            <h1 style=" padding:20px; background: #2B2A37; color:#fff; text-align:center; margin:0; ">Bienvenido a la parte Publica</h1>
            <h2 style="text-align: center;">Pasa por Query Params tu nombre</h2>
            <p style="text-align: center;">Ejemplo: agregale al url: ?nombre=tu Nombre o /tu Nombre</p>
            ${
                nombre ? `<h3 style="text-align: center;">Hola ${nombre}</h3>` : ''
            }
        </body>
        `
    );
});

module.exports = ruta;