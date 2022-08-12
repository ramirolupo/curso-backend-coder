const sumar = () => {
    let suma = 0;
    for (let i = 0; i < 5e9; i++) {
        suma += 1;
    }
    return suma;
}

process.on('message', () => {
    console.log(`PID del proceso hijo: ${process.pid}`);
    let resultado = sumar();
    process.send(`Resultado de la suma: ${resultado}`);
    process.exit();
});

module.exports.sumar = sumar;