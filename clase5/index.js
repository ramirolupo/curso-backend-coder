const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server runing on PORT: ${PORT}`);
})

let visitas = 0;

app.get('/', (req, res) => {
    res.send('<h1 style="color: green">HOLA MUNDO</h1>');
})

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`Hola por vez número ${visitas}`);
})