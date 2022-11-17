const express = require('express');
const ruta = express.Router();
const { findExistingUser , updateUser , deleteUser , datosUserPerfil } = require('../controllers/controller');
const autorizacion = require('../middlewares/autorizacion');
const createUser = require('../helpers/createUser');
const login = require('../helpers/login');
const verifyPasword = require('../middlewares/passwordVerify');
const encriptarContraseña = require('../helpers/encriptarContraseña')
const { agregarRoles } = require('../controllers/roles.controller')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET


//registrar usuario.
ruta.post( '/new' , async( req , res) => {
    console.clear();
    const user = req.body;
    const roles = user.role;
    const {email} = user;
    const existingUser = await findExistingUser({email});
    if(existingUser) return res.sendStatus(400);
    let idRoles;
    if(roles){
         idRoles = await agregarRoles( { nombre : {$in: roles}} );
    }else{
         idRoles = await agregarRoles( {nombre: 'user'} );
    };
    user.role = idRoles;
    const newUser = await createUser(user);
    res.status(200).send(newUser);  
});

//Login con email y contraseña.
ruta.post( '/login' , async( req , res ) => {
    console.clear();
    const { email , contraseña } = req.body;
    if( !email || !contraseña ) return res.sendStatus(400);
    try {
        const user = await login( email , contraseña );
        const userData = {
            id:user._id,
            role: user.role,
            rango: user.rango,
            permisos: user.permisos
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

//Datos de usuario require token
ruta.use(autorizacion)
ruta.get( '/mi-perfil' , async( req , res ) => {
    console.clear();
    const url = req.url.replace(/\//g, ':').slice(1);
    if( req.permissions.indexOf(url) === -1) return res.sendStatus(401);

    const { id } = req.user;
    const user = await datosUserPerfil({_id :id});
    if( !user ) return res.sendStatus(400);
    user.contraseña = undefined;
    return res.status(200).send(user);
});

//Actualizacion de Nombre y Apellidos require token
ruta.patch( '/uptdate-N&A' , async( req , res ) => {
    console.clear();
    const url = req.url.replace(/\//g, ':').slice(1);
    if( req.permissions.indexOf(url) === -1) return res.sendStatus(401);

    const { id } = req.user;
    const newData = req.body
    const user = await updateUser(id , newData);
    if( !user ) return res.sendStatus(400);
    user.contraseña = undefined; 
    return res.status(200).send(user); 
});

//Actualizacion de Email require token y contraseña
ruta.use(verifyPasword)
ruta.patch( '/uptdate-email' , async( req , res ) => {
    console.clear();
    const url = req.url.replace(/\//g, ':').slice(1);
    if( req.permissions.indexOf(url) === -1) return res.sendStatus(401);


    const { id } = req.user;
    const email = req.body.email
    const user = await updateUser(id , {email});
    if( !user ) return res.sendStatus(400);
    user.contraseña = undefined; 
    return res.status(200).send(user); 
});

//Actualizacion de Contraseña require token y contraseña actual
ruta.patch( '/uptdate-password' , async( req , res ) => {
    console.clear();
    const url = req.url.replace(/\//g, ':').slice(1);
    if( req.permissions.indexOf(url) === -1) return res.sendStatus(401);


    const { id } = req.user;
    const {NuevaContraseña} = req.body
    if( !NuevaContraseña ) return res.sendStatus(400);
    const contraseña = encriptarContraseña( NuevaContraseña )
    const user = await updateUser(id , {contraseña});
    if( !user ) return res.sendStatus(400);
    user.contraseña = undefined; 
    return res.status(200).send('La contraseña fue cambiada con exito');
});

//Eliminar datos de la plataforma , require token y contraseña actual
ruta.delete( '/delete' , async( req , res ) => {
    console.clear();
    const url = req.url.replace(/\//g, ':').slice(1);
    if( req.permissions.indexOf(url) === -1) return res.sendStatus(401);

    const { id } = req.user;
    const user = await deleteUser(id)

    res.status(200).send('El usuario fue eliminado con Exito')
});

module.exports = ruta;