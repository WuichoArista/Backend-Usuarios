const express = require('express');
const ruta = express.Router();
const { findExistingUser } = require('../controller/controller');
const userService = require('../auth/userServices')
const authUser = require('../auth/auth')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SECRET = process.env.SECRET

const service = new userService()
const auth = new authUser()

ruta.post( '/new' , async( req , res) => {
    console.clear();
    const user = req.body;
    const {email} = user;
    const existingUser = await findExistingUser({email});
    if(existingUser) return res.sendStatus(400);
    const newUser = await service.createUser(user);
    res.status(200).send(newUser);
});

ruta.post( '/login' , async( req , res ) => {
    console.clear();
    const { email , contraseña } = req.body;
    if( !email || !contraseña ) return res.sendStatus(400);
    try {
        const user = await auth.login( email , contraseña );
        const userData = {
            id:user._id,
            role: user.role,
            rango: user.rango,
            permisos:['mi-perfil']
        };
        const token = jwt.sign({
            data:userData
        },SECRET,{
            expiresIn: 60 * 60
        });
        return res.status(201).send({token});
    } catch (error) {
        return res.sendStatus(401);
    };
});

module.exports = ruta;