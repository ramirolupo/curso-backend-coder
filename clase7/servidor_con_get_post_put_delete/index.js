const express = require('express');

const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

const frase = 'Frase inicial';

app.get('/api/frase', (req, res) => res.send({ frase }));

app.get('/api/palabras/:pos', (req, res) => {
    const pos = parseInt(req.params.pos);
    let palabras = frase.split(' ');
    res.send({ buscada: palabras[pos - 1] });
})

app.post('/api/palabras')