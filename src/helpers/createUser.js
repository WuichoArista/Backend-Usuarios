const { addUser } = require('../controllers/controller');

const createUser = async ( userData ) => {
    const newUser = await addUser( userData ) ;
    newUser.contraseña = undefined;
    return `El usuario ${newUser.nombre[0].toUpperCase() + newUser.nombre.substring(1)} ${ newUser.apellidoP[0].toUpperCase() + newUser.apellidoP.substring(1)} ha sido creado`;

};


module.exports = createUser