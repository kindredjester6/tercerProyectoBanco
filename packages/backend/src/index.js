const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;

// Configuración de la base de datos
const dbConfig = {
    user: 'admin',
    password: 'avioneta1406$',
    server: 'LAPTOP-SJR955OH\\SQLEXPRESS',
    database: 'Banco',
    options: {
        trustServerCertificate: true // Usa en true si estás utilizando una base de datos local
    }
};

module.exports = {dbConfig};

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

const userRoutes = require('./routes/rutaTarjeta');
app.use('/api', userRoutes);
