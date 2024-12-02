const { getUser } = require('../models/usuario')

exports.getUser = async (req, res) => {
    try { 
        const { usuario, password } = req.body;
        const esUser = await getUser(usuario,password);
        console.log(esUser)
        res.status(201).json(esUser);
    } catch (error)
        {res.status(400).json({ error: error.message }); 
    }
};