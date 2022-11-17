const mongoose = require('mongoose');
const { Schema , model } = mongoose;

const roleSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        lowercase:true

    }
},{
    versionKey:false,
    timestamps:true
})

const roleModel = model( 'roles' , roleSchema);

module.exports = roleModel;