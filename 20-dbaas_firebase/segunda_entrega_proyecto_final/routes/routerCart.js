const express = require("express");
const { addCart, deleteCart, getProducts, addProductToCart, deleteProduct } = require("../controllers/controllerCart.js");
const routerCarts = express.Router();

//Add a cart
routerCarts.post('/', addCart);

//Delete cart
routerCarts.delete('/:id', deleteCart);

//Get products form an specific cart
routerCarts.get('/:id/products', getProducts);

//Add a product to a cart
routerCarts.post('/:id/products', addProductToCart);

//Delete a product from a cart
routerCarts.delete('/:id/products/:id_prod', deleteProduct);

module.exports = routerCarts;