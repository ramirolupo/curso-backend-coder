const mongoose = require('mongoose');
const { estudiantes } = require('./models/estudiantes.js');

const est = [
	{ nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
	{ nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
	{ nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
	{ nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
	{ nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
	{ nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
	{ nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
	{ nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
	{ nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
	{ nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
]

const script = async () => {
	try {
		const CS = 'mongodb://localhost:27017/colegio';
		await mongoose.connect(CS);
		// const response = await estudiantes.updateOne({ nombre: 'Lucas', apellido: 'Blanco' }, { $set: { 'dni': 20355875 } });
		// console.log(response);
		// const response = await estudiantes.updateMany({}, { $set: { ingreso: false } })
		// console.log(response);
		// const response = await estudiantes.updateMany({ curso: '1A' }, { $set: { ingreso: true } })
		// console.log(response);
		// const response = await estudiantes.find({ $nota: { $gte: 4 } }).select(['-_id', '-__v']);
		// console.log(response);
		// const response = await estudiantes.find({ ingreso: true }).select(['-_id', '-__v']);
		// console.log(response);
		// const response = await estudiantes.deleteMany({ ingreso: true });
		// console.log(response);
		// const response = await estudiantes.find().select('-__v');
		// response.forEach(estudiante => console.log(`${estudiante} --> ${estudiante._id.getTimestamp()}`));
		const response = await estudiantes.updateMany({ $set: { 'nombre': Math.PI.toString() } });
		console.log(response);
	} catch (err) {
		console.log(err);
	}
};

script();