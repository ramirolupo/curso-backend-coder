console.clear();

const fs = require('fs');

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
    }
    static objetos = [];
    save(obj) {
        obj.id = Contenedor.objetos.length + 1;
        Contenedor.objetos.push(obj);
        fs.writeFileSync(
            this.fileName,
            JSON.stringify(Contenedor.objetos, null, 2)
        );
        return obj.id;
    }
    getByID(id) {
        const productos = JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
        const obj = productos.find((o) => o.id === id);
        return obj ? obj : null;
    }
    getAll() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    }
    deleteByID(id) {
        const arr = this.getAll();
        const obj = arr.find((o) => o.id === id);
        const newArr = arr.filter((o) => o.id != obj.id);
        Contenedor.objetos = newArr;
        fs.writeFileSync(this.fileName, JSON.stringify(newArr, null, 2));
    }
    deleteAll() {
        Contenedor.objetos = [];
        fs.writeFileSync(
            this.fileName,
            JSON.stringify(Contenedor.objetos, null, 2)
        );
    }
}

const productos = new Contenedor('productos.txt');

productos.save({
    title: 'nombre del producto1',
    price: 100,
    thumbnail: 'url de la foto del producto1',
});

productos.save({
    title: 'nombre del producto2',
    price: 200,
    thumbnail: 'url de la foto del producto2',
});

console.log('Producto 1: ', productos.getByID(1));
console.log('Productos: ', productos.getAll());

productos.deleteByID(2);

productos.save({
    title: 'nombre del producto3',
    price: 300,
    thumbnail: 'url de la foto del producto3',
});

productos.save({
    title: 'nombre del producto4',
    price: 400,
    thumbnail: 'url de la foto del producto4',
});

console.log('Productos: ', productos.getAll());
productos.deleteAll();
console.log('Productos: ', productos.getAll());
