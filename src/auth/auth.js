const bcryptjs = require('bcryptjs');
const { findExistingUser } = require('../controller/controller')

const authUser = class {
    constructor( userService ){
        this.userService = userService;
    };
    async login( email , contraseña){
        const user = await findExistingUser( {email} );
        if(!user){
            throw new Error(404)
        }
        if( await bcryptjs.compare( contraseña , user.contraseña )){
            user.contraseña = undefined;
            return user.toObject();
        }else{
            throw new Error(404)
        };

    };
};

module.exports = authUser