const sql = require('mssql');
const Tarjeta = require('../models/tarjeta');
const { dbConfig } = require('..');

exports.getCard = async (req, res) => {
    const tarjeta = new Tarjeta();
    try {
        const pool = await sql.connect(dbConfig);
        await pool.request()
            // .input('param', param.Int)
            .query('select 1');
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getCards = async (req, res) => {
    try {
        console.log("entró"+ dbConfig)
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('select * from TF');
        res.status(200).send(result.recordset);
    } catch (error) {
        res.status(500).send(error);
    }
};
