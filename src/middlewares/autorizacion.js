const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const autorizacion = ( req , res , next ) => {
    console.clear()
    const { authorization } = req.headers;
    if( !authorization ) return res.sendStatus(401);
    const token = authorization.split(' ')[1];
    if( !token ) return res.sendStatus(401);

    try {
        const decoded = jwt.decode( token , SECRET);
        req.user = decoded.data;
        req.permissions = decoded.data.permisos;
        next();
    } catch (error) {
        return res.status(400).send(error);
    };

};

module.exports = autorizacion;