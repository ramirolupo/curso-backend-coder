const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const { engine } = require('express-handlebars');
const Container = require('./container.js');
const { optionsMariaDB, optionsSQLite3 } = require('./options/config.js');

const PORT = 8080;
const app = express();
const httpserver = new HttpServer(app);
const io = new IOServer(httpserver);

const messages = new Container(optionsSQLite3, 'messages');
const products = new Container(optionsMariaDB, 'products');

app.use(express.static('views'));

app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('form');
});

io.on('connection', socket => {
    console.log('Conexión establecida');
    io.sockets.emit('products', products);
    io.sockets.emit('messages', messages);
    socket.on('product', product => {
        products.save(product);
        io.sockets.emit('products', products.getAll());
    })
    socket.on('message', message => {
        messages.save(message);
        io.sockets.emit('messages', messages.getAll());
    })
});

const server = httpserver.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', () => console.log(`Error: ${err}`));