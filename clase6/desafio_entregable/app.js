import express from 'express';
import Contenedor from '../../clase4/manejo_de_archivos/Contenedor.js';

const PORT = 8080;
const app = express();
const server = app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

const productos = new Contenedor('productos.txt');

app.get('/productos', async (req, res) => {
    const mostrarProductos = await productos.getAll();
    res.send(mostrarProductos);
})

app.get('/productoRandom', async (req, res) => {
    const p = await productos.getAll();
    const numeroRandom = Math.floor(Math.random() * p.length);
    res.send(p[numeroRandom]);
})