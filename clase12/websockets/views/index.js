const socket = io();
let listProducts = [];

const $formAddProduct = document.querySelector('#form-add-product');
const $listProducts = document.querySelector('#list-products');
const $nameInput = document.querySelector('#name-product');
const $priceInput = document.querySelector('#price-product');
const $imgInput = document.querySelector('#img-product');

$formAddProduct.addEventListener('submit', e => {
	e.preventDefault();
	socket.emit('productAdded', {
		name: document.querySelector('#name-product').value,
		price: document.querySelector('#price-product').value,
		img: document.querySelector('#img-product').value
	})
	e.target.reset();
});

socket.on('products', products => {
	listProducts = products;
});