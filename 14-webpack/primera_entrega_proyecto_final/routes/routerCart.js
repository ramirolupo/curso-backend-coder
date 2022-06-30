import express from "express";
const routerCarts = express.Router();
import Container from '../controllers/container.js';

const carts = new Container('./data/cart.json');
let admin;

routerCarts.post('/', (req, res) => {
	const products = req.body;
	if (!products) return carts.save([]);
	carts.save(products);
	res.json({ message: 'Carrito agregado' });
});

routerCarts.delete('/:id', (req, res) => {
	const id = Number(req.params.id);
	if (isNaN(id)) return res.send({ message: 'Ingresa el ID de un carrito listado' }).status(400);
	const cartDeleted = carts.deleteById(id);
	if (cartDeleted === -1) return res.json({ message: 'El ID no pertenece a un carrito listado' }).status(404);
	res.json({ message: 'Carrito eliminado' });
});

routerCarts.get('/:id/products', (req, res) => {
	const id = Number(req.params.id);
	if (isNaN(id)) return res.send({ message: 'Ingresa el ID de un carrito listado' }).status(400);
	const cartSelected = carts.getById(id);
	if (cartSelected == null) return res.send({ message: 'Ingresa el ID de un carrito listado' }).status(404);
	res.json({ 'Productos': cartSelected.products });
});

routerCarts.post('/:id/products', (req, res) => {
	const idCartSelected = Number(req.params.id);
	if (isNaN(idCartSelected)) return res.send({ message: 'Ingresa el ID de un carrito listado' }).status(400);
	const { idProduct } = req.body;
	const productSaved = carts.saveProduct(idCartSelected, idProduct);
	if (!productSaved) return res.send({ message: 'Error' }).status(404);
	res.json({ message: productSaved });
});

routerCarts.delete('/:id/products/:id_prod', (req, res) => {
	const id = Number(req.params.id);
	const id_prod = Number(req.params.id_prod);
	if (isNaN(id) || isNaN(id_prod)) return res.send({ message: 'Ingresa el ID de un carrito listado' }).status(400);
	const productDeleted = carts.deleteProduct(id, id_prod);
	if (productDeleted == -1 || !productDeleted) return res.send({ message: 'Error' }).status(404);
	res.send({ message: productDeleted });
});

export { routerCarts, carts };