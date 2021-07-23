/* Documentação para troca de banco https://node-postgres.com/features/connecting */
const mongoose = require('mongoose');

mongoose.connect('mongobd://localhost/lacrei',{useMongoClient:true});
mongoose.Promise = global.Promise;

module.exports = mongoose;