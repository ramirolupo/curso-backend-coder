const { options } = require('../messages/options/SQLite3.js');
const knex = require('knex')(options);

knex.schema.createTable('messages', table => {
	table.increments('id')
	table.string('usermail')
	table.string('message')
	table.string('date')
})
	.then(() => console.log('Tabla creada'))
	.catch(err => { console.log(err); throw err })
	.finally(() => knex.destroy())