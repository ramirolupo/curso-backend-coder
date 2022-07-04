import express from "express";
const routerProducts = express.Router();
import Container from '../controllers/container.js';

const products = new Container('./data/products.json');

//Get all products or product selected
routerProducts.get('/:id?', (req, res) => {
	if (req.params.id == undefined) return res.send(products.getAll());
	const id = Number(req.params.id);
	const product = products.getById(id);
	if (!product) return res.status(404).send({ message: 'El ID no pertenece a un producto listado' });
	res.json(product);
});

//Add product
routerProducts.post('/', (req, res) => {
	const { name, description, code, pic, price, stock } = req.body;
	products.save({ name, description, code, pic, price, stock });
	res.json({ message: 'Producto agregado' });
});

//Update product
routerProducts.put('/:id', (req, res) => {
	const id = Number(req.params.id);
	if (isNaN(id)) return res.status(400).send({ message: 'Ingresa el ID de un producto listado' });
	products.update(id, req.body);
	res.json({ message: 'Producto actualizado' });
});

routerProducts.delete('/:id', (req, res) => {
	const id = Number(req.params.id);
	if (isNaN(id)) return res.status(400).send({ message: 'Ingresa el ID de un producto listado' });
	const productDeleted = products.deleteById(id);
	if (productDeleted === -1) return res.status(404).json({ message: 'El ID no pertenece a un producto listado' });
	res.json({ message: 'Producto eliminado' });
});

export { routerProducts, products };