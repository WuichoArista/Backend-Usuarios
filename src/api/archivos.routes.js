const express = require('express');
const ruta = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/' });
const fs = require('fs-extra');

//prueba a mano no usar en ves de esto usar multer.
ruta.post( '/a-mano' , ( req , res) => {
    console.clear()
    console.log( req.headers['content-type']);

    const boundary = req.headers['content-type'].split('boundary=')[1]

    let body = '';
    req.on('data' , (chunk) => (body += chunk));
    req.on('end' , () => {
        body.split(boundary).map( (item , index ) => console.log( index, item))
        return res.sendStatus(200)

    })
})

ruta.use( '/publico' , express.static('uploads'))

ruta.post('/' , upload.single('img') , async ( req , res ) => {
    console.log(req.file)
    console.log(req.body)
    setInterval( async() => {
        await fs.remove(req.file.path)
    },5000)
    res.send('peticion recibida')
})

module.exports = ruta;