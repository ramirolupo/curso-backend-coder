const fs = require('fs');

fs.readFile('package.json', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Ocurrió un error: ${err.message}`);
    } else {
        const info = {
            contenidoStr: JSON.stringify(data, null, 2),
            contenidoObj: JSON.parse(data),
            size: Buffer.byteLength(data),
        };
        console.log(info);
        fs.writeFile('info.txt', info.contenidoStr, (err) => {
            if (err) {
                console.log(`Ocurrió un error: ${err.message}`);
            } else {
                console.log('Guardado!!');
            }
        });
    }
});
