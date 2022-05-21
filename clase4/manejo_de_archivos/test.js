const Contenedor = require('./Contenedor.js');
console.clear();

const productos = new Contenedor('contenedor.txt');

//Pruebo el método save
// productos.save({
//     title: 'title',
//     price: 100,
//     thumbnail: 'url de la foto del producto'
// });

//Pruebo el método getAll
// productos.getAll();

//Pruebo el método getById
// productos.getById(1);

//Pruebo el método deleteById
// productos.deleteById(2);

//Pruebo el método deleteAll
// productos.deleteAll();

// productos.generateId();