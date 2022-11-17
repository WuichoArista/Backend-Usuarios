const bcryptjs = require('bcryptjs');

const encriptarContraseña = ( contraseña ) => {
    const encriptarContraseña = bcryptjs.hashSync( contraseña , 12 );
    return encriptarContraseña;
};

module.exports = encriptarContraseña;