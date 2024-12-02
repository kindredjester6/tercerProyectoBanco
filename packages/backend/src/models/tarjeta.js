const { poolPromise, sql } = require('../Config/database');

async function getTarjetas(){
    try {
        const pool = await poolPromise; 
        const result = await pool
            .request()
            .query('SELECT * FROM TF tf');
        return result.recordset;
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { getTarjetas };