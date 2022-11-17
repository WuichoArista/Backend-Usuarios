const express = require('express');
const ruta = express.Router();
const {addRole , findRoles} = require('../controllers/roles.controller')

ruta.get( '/' , async ( req , res ) => {
    const roles = await findRoles({});
    res.send(roles)

})

ruta.post( '/' , async( req , res ) => {
    role = req.body
    const newRole = await addRole(role)
    res.send(newRole)
})

module.exports = ruta