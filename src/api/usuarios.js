const express = require('express');
const ruta = express.Router();
const { findExistingUser , addUser } = require('../controller/controller');


ruta.post( '/new' , async( req , res) => {
    console.clear();
    const user = req.body;
    const {email} = user;
    const existingUser = await findExistingUser({email});
    if(existingUser) return res.sendStatus(400);
    const newUser = await addUser(user);
    newUser.contraseña = undefined;
    res.status(200).send(`El usuario ${newUser.nombre} sea creado`);
});

module.exports = ruta;