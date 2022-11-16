const mongoose = require('mongoose');
const { Schema , model } = mongoose;

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
    apellidpP: {
        type: 'string',
        required:true,
        lowercase:true
    },
    apellidpM: {
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

const modelUser = model('Usuarios' , UserSchema);

module.exports = modelUser