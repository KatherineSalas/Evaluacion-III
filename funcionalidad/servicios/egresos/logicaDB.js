const Egresos = require('./egresos.model');

const crearEgresosDB = async (Crearegresos) => {
    let respuesta = await Egresos.create(Crearegresos);
    return respuesta;
}

const obtenerEgresosDB = async () => {
    let respuesta = await Egresos.find();
    return respuesta;
}


module.exports = {
    crearEgresosDB,
    obtenerEgresosDB,
    
}