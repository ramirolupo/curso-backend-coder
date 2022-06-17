import fs from 'fs';

let products = [];

class Product {
	constructor(timestamp, name, description, code, pic, price, stock) {
		this.id = this.generateId();
		this.timestamp = timestamp;
		this.name = name;
		this.description = description;
		this.code = code;
		this.pic = pic;
		this.price = price;
		this.stock = stock;
	}
	static generateId = async () => {
		try {
			products = await this.getProducts() || [];
			let maxId = products.length;
			products.forEach(product => {
				product.id > maxId ? maxId = product.id : maxId;
			});
			return maxId + 1;
		} catch (err) {
			console.log(err);
		}
	}
	static getProduct = async id => {
		try {
			products = await this.getProducts();
			let productFound = products.find(product => product.id === id);
			return productFound ? productFound : null;
		} catch (err) {
			console.log(err);
		}
	}
	static getProducts = async () => {
		try {
			let productsFS = await fs.promises.readFile('./data/products.json', 'utf-8');
			let productsParsed = JSON.parse(productsFS);
			return productsParsed;
		} catch (err) {
			console.log(err);
		}
	}
	static addProduct = async product => {
		try {
			const readFile = await this.getProducts();
			if (!readFile) {
				product.id = await this.generateId();
				products.push(product);
				fs.promises.writeFile('./data/products.json', JSON.stringify(products, null, 2));
				return product.id;
			}
			products = readFile;
			product.id = await this.generateId();
			products.push(product);
			fs.promises.writeFile('./data/products.json', JSON.stringify(products, null, 2));
		} catch (err) {
			console.log(err);
		}
	}
	static updateProduct = async (id, data) => {
		try {
			let productToUpdate = await this.getProduct(id);
			if (!productToUpdate) return;
			const { timestamp, name, description, code, pic, price, stock } = data;
			productToUpdate = { id, timestamp, name, description, code, pic, price, stock };
			return productToUpdate;
		} catch (err) {
			console.log(err);
		}
	}
	static async deleteProduct(id) {
		try {
			products = await this.getProducts();
			if (id < 1 || id > products.length) return;
			products = products.filter(product => product.id != id);
			fs.promises.writeFile('./data/products.json', JSON.stringify(products, null, 2));
			return id;
		} catch (err) {
			console.log(err);
		}
	}
}

export default Product;