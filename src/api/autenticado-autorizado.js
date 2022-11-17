const express = require('express');
const ruta = express.Router();

const usuario = {
    nombre:'Luis',
    email: 'larista@grupoicl.com',
    contraseña: 'Luis123',
    roll: 'admin'
}

//Endpoint autenticado para todo usuario registrado
ruta.post( '/autenticado' , ( req , res) => {
    console.clear()
    const { email , contraseña } = req.body
    if( !email || !contraseña){
        return res.sendStatus(400)
    }
    if(usuario.contraseña !== contraseña) return res.status(401).send('contraseña no coinside')
    if(usuario.email !== email) return res.status(401).send('email no coinside')
    
    return res.status(200).send(`El usuario ${usuario.nombre} se ha autenticado`)

})

//Endpoint autorizado a administradores
ruta.post( '/autorizado' , ( req , res ) => {
    console.clear()
    const { email , contraseña } = req.body
    if( !email || !contraseña){
        return res.sendStatus(400)
    }
    if(usuario.contraseña !== contraseña) return res.status(401).send('contraseña no coinside')
    if(usuario.email !== email) return res.status(401).send('email no coinside')
    if(usuario.roll !== 'admin') return res.status(401).send('Este usuario no es admin')
    return res.status(200).send(`El usuario ${usuario.nombre} tiene autorizacion de ${usuario.roll}`)



} )

module.exports = ruta