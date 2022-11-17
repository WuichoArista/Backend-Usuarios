const bcryptjs = require('bcryptjs');
const { findExistingUser } = require('../controllers/controller');

const verifyPasword = async( req , res , next) => {
    const { contraseña } = req.body;
    if( !contraseña ) return res.sendStatus(400);
    const {id} = req.user;
    const user = await findExistingUser({id});
    if( !user ) return res.sendStatus(404);
    if( await bcryptjs.compare( contraseña , user.contraseña )){
        user.contraseña = undefined
        next()
    }else{
        return res.send('las contraseñas no coinsiden')
    }


};

module.exports = verifyPasword;