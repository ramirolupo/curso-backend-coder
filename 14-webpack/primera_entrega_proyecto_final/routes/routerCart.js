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

export default routerCart;