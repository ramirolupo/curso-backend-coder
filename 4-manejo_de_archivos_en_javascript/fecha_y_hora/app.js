const fs = require('fs');

const fyh = new Date().toLocaleString();

fs.writeFileSync('fyh.txt', fyh);

try {
    let readFile = fs.readFileSync('fyh.txt', 'utf-8');
    console.log(readFile);
} catch (err) {
    console.log(err.message);
}
