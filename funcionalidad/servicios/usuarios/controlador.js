const logicaDB = require('./logicaDB');

const crearUsuario = async (req,res)=>{
    let usuario = req.body;
     
    try {
        let respuesta = await logicaDB.crearUsuarioDB(usuario);
        res.status(200).json({
            'registro': respuesta
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

const obtenerUsuario = async (req,res) => {
    try {
        let respuesta = await logicaDB.obtenerUsuarioDB();
        res.status(200).json({
            'registro': respuesta
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

module.exports = {
    crearUsuario,
    obtenerUsuario
}