const bcryptjs = require('bcryptjs');

const authUser = class {
    constructor( userService ){
        this.userService = userService;
    };
    async login( email , contraseña){
        const user = await this.userService.getByEmail( email );
        if(!user){
            throw new Error(404)
        }
        if( await bcryptjs.compare( contraseña , user.contraseña ) || !user ){
            user.contraseña = undefined;
            return usuario.toObject();
        }else{
            throw new Error(404)
        };

    };
};