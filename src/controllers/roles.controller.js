const roleModel = require('../model/roles');

const addRole = async( role ) => {
    const newRole = new roleModel(role);
    await newRole.save();
    return newRole
}

const findRoles = ( parametro ) => {
    const roles = roleModel.find(parametro)
    return roles
}

const agregarRoles= async( parametro ) => {
   const buscarRoles =  await roleModel.find( parametro );
   const idRoles = buscarRoles.map( role => {
    return role.id
   })
   return idRoles
}

module.exports = {addRole , findRoles , agregarRoles}