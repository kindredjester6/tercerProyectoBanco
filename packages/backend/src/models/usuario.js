const { poolPromise, sql } = require('../Config/database');

async function getUser(nombre, password){
    try {
        let success;
        const pool = await poolPromise; 
        const result = await pool
            .request()
            .input('nombre',sql.VarChar(50),nombre)
            .input('password',sql.VarChar(50),password)
            .query('SELECT * FROM TH th where @nombre = th.usuario and @password = th.password');
        
        if(result.recordset.length === 0){
            success = false
        } else {
            success = true
        }
        return {result:result.recordset, success:success};
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { getUser };