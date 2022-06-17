import express from "express";
const router = express.Router();

let admin;

let carts = [
	{
		id: 1,
		timestamp: Date.now(),
		products: 'products'
	}
]

router.post('/', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.get('/:id/products', (req, res) => {

});

router.post('/:id/products', (req, res) => {

});

router.delete('/:id/products/:id_prod', (req, res) => {

});

export default router;