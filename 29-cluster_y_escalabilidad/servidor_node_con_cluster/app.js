const express = require('express');
const cluster = require('cluster');
const cpus = require('os').cpus().length;
const { PORT } = require('./config');
const { router } = require('./router/router');
const app = express();

if (cluster.isPrimary) {
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`${new Date().toLocaleString()} - Worker: ${worker.process.pid} - Master: ${cluster.process.pid}`);
    });
} else {
    app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT} - PDI: ${process.pid}`));
}

app.use('/', router);
