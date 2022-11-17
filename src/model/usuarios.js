const mongoose = require('mongoose');
const { Schema , model } = mongoose;
const bcryptjs = require('bcryptjs')

const UserSchema = new Schema({
    nombre: {
        type: String,
        required:true,
        lowercase:true,
        minLength:2,
        maxLength:20

    },
    segundoNombre: {
        type: String,
        lowercase:true,
        minLength:2,
        maxLength:20

    },
    apellidoP: {
        type: String,
        required:true,
        lowercase:true,
        minLength:4,
        maxLength:20

    },
    apellidoM: {
        type: String,
        required:true,
        lowercase:true,
        minLength:4,
        maxLength:20

    },
    email:{
        type: String,
        required: true,
        lowercase:true
    },
    contraseña:{
        type: String,
        required: true
    },
    rango:{
        type: String,
        required: true,
        lowercase:true
    },
    role:{
        type: String,
        required: true,
        lowercase:true
    },
    permisos:{
        type: Array,
        required: true,
        lowercase:true
    },
    baneado:{
        type: Boolean,
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