const logicaDB = require('./logicaDB');

const crearEgresos = async (req,res)=>{
    let egreso = req.body;
     
    try {
        let respuesta = await logicaDB.crearEgresosDB(egreso);
        res.status(200).json({
            'registro': respuesta
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

const obtenerEgresos = async (req,res) => {
    try {
        let respuesta = await logicaDB.obtenerEgresosDB(req);
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
    crearEgresos,
    obtenerEgresos
}