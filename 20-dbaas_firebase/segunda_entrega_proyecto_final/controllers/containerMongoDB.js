const mongoose = require('mongoose');

class Container {
	constructor(collection, schema) {
		this.model = mongoose.model(collection, schema);
	}
	//Save an object
	save(obj) {
		try {
			this.model.create(obj);
		} catch (err) {
			console.log(err);
		}
	}
	//Get an object by ID
	getById(id) {
		try {
			return this.model.findById(id);
		} catch (err) {
			console.log(err);
		}
	}
	//Get all objects
	getAll() {
		try {
			return this.model.find();
		} catch {

		}
	}
	//Delete one object
	deleteById(id) {
		try {
			this.model.findByIdAndDelete(id);
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = Container;