const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const { engine } = require('express-handlebars');
const Container = require('./container.js');
const router = require('./routes/router');
const { optionsMariaDB, optionsSQLite3 } = require('./options/config.js');
const session = require('express-session');

const PORT = 8080;
const app = express();
const httpserver = new HttpServer(app);
const io = new IOServer(httpserver);

const products = new Container(optionsSQLite3, 'products');
const messages = new Container(optionsMariaDB, 'messages');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(router);
app.use(express.static('views'));
app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');


io.on('connection', async socket => {
    console.log('Conexión establecida');

    const dbProducts = await products.getAll();
    io.sockets.emit('products', dbProducts);
    const dbMessages = await messages.getAll();
    io.sockets.emit('messages', dbMessages);

    socket.on('product', async product => {
        products.save(product);
        const dbProducts = await products.getAll();
        io.sockets.emit('products', dbProducts);
    })
    socket.on('message', async message => {
        messages.save(message);
        const dbMessages = await messages.getAll();
        io.sockets.emit('messages', dbMessages);
    })
});

const server = httpserver.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', () => console.log(`Error: ${err}`));