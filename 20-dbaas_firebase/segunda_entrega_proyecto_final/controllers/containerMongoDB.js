const mongoose = require('mongoose');

class Container {
	constructor(collection, schema) {
		this.model = mongoose.model(collection, schema);
	}
	//Save an object
	async save(obj) {
		try {

		} catch (err) {
			console.log(err);
		}
	}
	//Get an object by ID
	getById(id) {
		try {

		} catch (err) {
			console.log(err);
		}
	}
	//Get all objects
	getAll() {
		try {

		} catch {

		}
	}
	//Delete one object
	deleteById(id) {
		try {

		} catch (err) {
			console.log(err);
		}
	}
	//Delete all objects
	async deleteAll() {
		try {

		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = Container;