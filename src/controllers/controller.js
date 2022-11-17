const modelUser = require('../model/usuarios');

const addUser = async( usuario ) => {
    const nuevoUsuario = new modelUser( usuario );
    await nuevoUsuario.save();
    return nuevoUsuario;
};

const findExistingUser = async( parametro ) => {
    const usuario = await modelUser.findOne(parametro);
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
    deleteUser
}