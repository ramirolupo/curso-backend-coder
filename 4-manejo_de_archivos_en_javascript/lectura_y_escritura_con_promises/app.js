const fs = require('fs');

async function readFile() {
    try {
        const data = await fs.promises.readFile(
            '../lectura_y_escritura_de_archivos/info.txt',
            'utf-8'
        );
        const info = JSON.parse(JSON.parse(data));
        info.author = 'Coderhouse';
        await fs.promises.writeFile(
            'package.json.coder',
            JSON.stringify(info, null, 2)
        );
    } catch (err) {
        console.log(`Ocurrió un error: ${err}`);
    }
}

readFile();
