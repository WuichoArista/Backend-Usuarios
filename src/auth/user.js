const { addUser } = require('../controller/controller');

const userService = class {
    constructor( modelUser ){
        this.modelUser = modelUser;
    };
    getByEmail( email ){
        return this.modelUser.findOne({email})
    };
    async createUser( userData ){
        const newUser = await addUser( userData ) ;
        newUser.contraseña = undefined;
        return `El usuario ${newUser.nombre[0].toUpperCase() + newUser.nombre.substring(1)} ${ newUser.apellidoP[0].toUpperCase() + newUser.apellidoP.substring(1)} ha sido creado`;
    };
};

module.exports = userService