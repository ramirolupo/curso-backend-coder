const Container = require('../controllers/containerMongoDB.js');

class Carts extends Container {
	constructor() {
		super('carts', {
			timestamp: { type: Number, require: true },
			products: { type: String, require: true },
		});
	}
}

module.exports = Carts;