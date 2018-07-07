var mongoose 		= require('mongoose');  
var config          = require ('./config');

mongoose.Promise = global.Promise;

const connection = mongoose.connect(config.database.uri);

connection
	.then(db => {
		console.log(
			`Conectado com sucesso a ${config.database.uri} MongoDB cluster em ${
				config.env
			} modo.`,
		);
		return db;
	})
	.catch(err => {
		if (err.message.code === 'ETIMEDOUT') {
			console.log('Tentando re-estabelecer conecção ao BD.');
			mongoose.connect(config.database.uri);
		} else {
			console.error('Erro ao tentar conectar ao BD: ');
			console.error(err);
		}
	});

module.exports = connection;