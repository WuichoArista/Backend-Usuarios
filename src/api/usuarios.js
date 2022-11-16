const express = require('express');
const ruta = express.Router();
const { findExistingUser } = require('../controller/controller');
const userService = require('../auth/user')

const service = new userService()

ruta.post( '/new' , async( req , res) => {
    console.clear();
    const user = req.body;
    const {email} = user;
    const existingUser = await findExistingUser({email});
    if(existingUser) return res.sendStatus(400);

    const newUser = await service.createUser(user)
    res.status(200).send(newUser);
});

ruta.post( '/login' , async( req , res ) => {
    console.clear();
    const { email , contraseña } = req.body;
});

module.exports = ruta;