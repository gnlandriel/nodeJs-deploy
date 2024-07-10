const express = require('express');
const productsRoutes = require('./routes/productsRoutes')

const app = express();

app.use(express.json());
app.use('/products', productsRoutes)

const port = 3001;

app.listen(port, () => {
    console.log(`Escuchando en puerto: ` + `https://localhost:${port}`)
});

