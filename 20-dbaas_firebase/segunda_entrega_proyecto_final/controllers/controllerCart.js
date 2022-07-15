const Carts = require('../controllers/containerCarts.js');

const carts = new Carts();
let admin;

//Add a cart
const addCart = (req, res) => {
	const products = req.body;
	!products ? carts.save([]) : carts.save(products);
	res.json({ message: 'Carrito agregado' });
}

//Delete cart
const deleteCart = (req, res) => {
	const id = req.params.id;
	carts.deleteById(id);
	res.json({ message: 'Carrito eliminado' });
}

//Get products form an specific cart
const getProducts = async (req, res) => {
	const id = req.params.id;
	const cartSelected = await carts.getById(id);
	res.json({ 'Productos': cartSelected.products });
}

//Add a product to a cart
const addProductToCart = (req, res) => {
	const idCartSelected = Number(req.params.id);
	const { idProduct } = req.body;
	const productSaved = carts.saveProduct(idCartSelected, idProduct);
	if (!productSaved) return res.status(404).send({ message: 'Error' });
	res.json({ message: productSaved });
}

//Delete a product from a cart
const deleteProduct = (req, res) => {
	const id = req.params.id;
	const id_prod = req.params.id_prod;
	carts.deleteProduct(id, id_prod);
	res.json({ message: 'Producto eliminado' });
}

module.exports = { addCart, deleteCart, getProducts, addProductToCart, deleteProduct };