const express = require('express');

const frase = 'Hola mundo cómo están';

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

app.get('/api/frase', (req, res) => {
    res.json({ frase });
})

app.get('/api/letras/:num', (req, res) => {
    let num = parseInt(Object.values(req.params));
    res.status(200).json({ letra: frase[num - 1] });
});

app.get('/api/palabras/:num', (req, res) => {
    let num = parseInt(Object.values(req.params));
    const palabras = frase.split(' ');
    res.status(200).json({ palabra: palabras[num - 1] });
});