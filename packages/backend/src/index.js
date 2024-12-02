const express = require('express');
const app = express();
const userRoutes = require('./routes/rutas');
const cors = require('cors');

const port = 3000;

app.use(express.json());
app.use(cors())

app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

