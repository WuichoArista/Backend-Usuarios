const modelUser = require('../model/usuarios');

const addUser = async( usuario ) => {
    const nuevoUsuario = new modelUser( usuario );
    await nuevoUsuario.save();
    return nuevoUsuario;
};

//Con populate mostramos la informacion de los ids de role relacionados por lo que recomiendo separarlo para logearse y devuelva el token solo con los ids y para mi perfil donde ya mostraria la info de esos ids
const findExistingUser = async( parametro ) => {
    const usuario = await modelUser.findOne(parametro);
    return usuario;
};

const datosUserPerfil = async( parametro ) => {
    const usuario = await modelUser.findOne(parametro).populate('role');
    return usuario;
};

const updateUser = ( _id , newData ) => {
    return modelUser.findByIdAndUpdate( {_id} , newData , {
        upser: false,
        new: true
    });
};

const deleteUser = ( _id ) => {
   return modelUser.findByIdAndDelete( {_id});
};

module.exports = {
    addUser,
    findExistingUser,
    updateUser,
    deleteUser,
    datosUserPerfil
}