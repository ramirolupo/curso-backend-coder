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
    let num = parseInt(req.params.num);
    if (isNaN(num)) return res.send({ error: 'El parámetro no es un número' });
    if (num < 1 || num > frase.length) return res.send({ error: 'El parámetro está fuera de rango' });
    res.status(200).json({ letra: frase[num - 1] });
});

app.get('/api/palabras/:num', (req, res) => {
    let num = parseInt(req.params.num);
    if (isNaN(num)) return res.send({ error: 'El parámetro no es un número' });
    const palabras = frase.split(' ');
    if (num < 1 || num > palabras.length) return res.send({ error: 'El parámetro está fuera de rango' });
    res.status(200).json({ palabra: palabras[num - 1] });
});