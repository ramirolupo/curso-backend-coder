const express = require('express');
const app = express();
const { fork } = require('child_process');
const { sumar } = require('./controller/controller');

let visitas = 0;
app.get('/', (req, res) => {
    res.send(`<p>Total de visitas: <strong>${visitas++}</strong></p>`);
});

app.get('/calculo-bloq', (req, res) => {
    const resultado = sumar();
    res.send(`El resultado de la suma es: ${resultado}`);
});

app.get('/calculo-nobloq', (req, res) => {
    const child = fork(__dirname + '/controller/controller');
    console.log(`PID del proceso padre: ${process.pid}`);
    child.send('start');
    child.on('message', message => {
        child.on('close', code => {
            console.log(`Worker cerrado. Código: ${code}`);
        });
        res.send(message);
    });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));