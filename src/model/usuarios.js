const mongoose = require('mongoose');
const { Schema , model } = mongoose;
const bcryptjs = require('bcryptjs')

const UserSchema = new Schema({
    nombre: {
        type: 'string',
        required:true,
        lowercase:true
    },
    segundoNombre: {
        type: 'string',
        lowercase:true
    },
    apellidoP: {
        type: 'string',
        required:true,
        lowercase:true
    },
    apellidoM: {
        type: 'string',
        required:true,
        lowercase:true
    },
    email:{
        type: 'string',
        required: true,
        lowercase:true
    },
    contraseña:{
        type: 'string',
        required: true
    },
    rango:{
        type: 'string',
        required: true,
        lowercase:true
    },
    baneado:{
        type: 'Boolean',
        required: true
    }
},{
    versionKey: false,
    timestamps: true
});

UserSchema.pre( 'save' , function(next) {
    const encriptarContraseña = bcryptjs.hashSync( this.contraseña , 12 );
    this.contraseña = encriptarContraseña;
    next()
} );

const modelUser = model('Usuarios' , UserSchema);

module.exports = modelUser;