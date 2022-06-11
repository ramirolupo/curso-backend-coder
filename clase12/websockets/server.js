const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const { router, products } = require('./routes/products.js');

const PORT = 8080;
const app = express();
const httpserver = new HttpServer(app);
const io = new IOServer(httpserver);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', router);

const addProduct = socket => {
	socket.on('productAdded', product => {
		products.push(product);
		io.sockets.emit('products', products);
	})
}

io.on('connection', socket => {
	console.log('Un cliente se ha conectado');
	io.sockets.emit('products', products);
	addProduct(socket);
});

const server = httpserver.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', () => console.log(`Error: ${err}`));