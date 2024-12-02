const { getTarjetas } = require('../models/tarjeta');


exports.getTarjetas = async (req, res) => {
    try { 
        const TFs = await getTarjetas(); 
        res.status(201).json(TFs); 
    } catch (error)
        { res.status(400).json({ error: error.message }); 
    }
};

exports.getTarjeta = async (req, res) => {
    try {
        console.log("entró"+ dbConfig)
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('select top(1) * from TF');
        res.status(200).send(result.recordset);
    } catch (error) {
        res.status(500).send(error);
    }
};
