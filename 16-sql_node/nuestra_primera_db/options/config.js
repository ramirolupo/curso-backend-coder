const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './DB/messages.sqlite'
	},
	useNullAsDefault: true
}

const optionsMariaDB = {
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'products'
	}
}

module.exports = { optionsSQLite3, optionsMariaDB };