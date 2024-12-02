const sql = require('mssql');

const dbConfig = { 
    user: 'sa',
    password: 'Avioneta1406$',
    server: 'LAPTOP-SJR955OH\\SQLEXPRESS',
    database: 'Banco',
    options: {
        trustServerCertificate: true // Usa en true si estás utilizando una base de datos local
    }
};


/** * @type {Promise<sql.ConnectionPool>} */
const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Conectado a la base de datos');
    return pool;
  })
  .catch(err => {
    console.error('Error de conexión a la base de datos:', err);
  });

module.exports = {
  sql, poolPromise
};
