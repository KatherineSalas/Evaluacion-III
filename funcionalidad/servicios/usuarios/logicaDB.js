const Usuario = require('./usuario.model');

const crearUsuarioDB = async (crearusuario) => {
    let respuesta = await Usuario.create(crearusuario);
    return respuesta;
}

const obtenerUsuarioDB = async () => {
    let respuesta = await  Usuario.find();
    return respuesta;
}


module.exports = {
    crearUsuarioDB,
    obtenerUsuarioDB,
    
}