//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}	
	console.log('Connected to MongoDB server');
  
	db.collection('Todos').deleteMany({text: 'Something to do'});
	db.collection('Todos').findOneAndDelete({text: 'Nothing to do'}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	});
	    
  //db.close();
});
