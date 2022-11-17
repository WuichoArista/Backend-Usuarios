const bcryptjs = require('bcryptjs');
const { findExistingUser } = require('../controllers/controller')

const login = async ( email , contraseña) => {
    const user = await findExistingUser( {email} );
    if(!user){
        throw new Error(404);
    }
    if( await bcryptjs.compare( contraseña , user.contraseña )){
        user.contraseña = undefined;
        return user.toObject();
    }else{
        throw new Error(404);
    };
}


module.exports = login;