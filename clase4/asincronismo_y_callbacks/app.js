const mostrarLetras = (string, interval, cb) => {
    let count = 0;
    setTimeout(() => {
        const int = setInterval(() => {
            if (count === string.length) {
                clearInterval(int);
                return cb();
            }
            console.log(string.at(count));
            count++;
        }, 1000);
    }, interval);
};

const fin = () => console.log('terminé');
mostrarLetras('xyz', 500, fin);
mostrarLetras('123', 0, fin);
mostrarLetras('abc', 250, fin);
