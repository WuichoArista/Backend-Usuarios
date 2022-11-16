const modelUser = require('../model/usuarios');

const addUser = async( usuario ) => {
    const nuevoUsuario = new modelUser( usuario );
    await nuevoUsuario.save();
    return nuevoUsuario
};

const findExistingUser = async( parametro ) => {
    const usuario = await modelUser.findOne(parametro)
    return usuario
}

module.exports = {
    addUser,
    findExistingUser
}