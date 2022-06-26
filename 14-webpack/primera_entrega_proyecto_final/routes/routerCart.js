import express from "express";
const routerCart = express.Router();
import Container from '../controllers/container.js';

const cart = new Container('./data/cart.json');
let admin;

routerCart.post('/', (req, res) => {
	const products = req.body;
	cart.save(products);
	res.json({ message: 'Carrito agregado' });
});

routerCart.delete('/:id', (req, res) => {
	const id = Number(req.params.id);
	if (isNaN(id)) return res.send({ message: 'Ingresa el ID de un carrito listado' });
	const cartDeleted = cart.deleteById(id);
	if (cartDeleted === -1) return res.json({ message: 'El ID no pertenece a un carrito listado' });
	res.json({ message: 'Carrito eliminado' });
});

export default routerCart;