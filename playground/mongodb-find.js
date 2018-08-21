//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}	
	console.log('Connected to MongoDB server');
  
	/*db.collection('Todos').find({
		_id: new ObjectID('5b7bb82783fb325b361282ef')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Todos', err);
	});*/
	
	/*db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
		//console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch Todos', err);
	});*/
	
	db.collection('User').find({name: 'Finn'}).toArray().then((docs) => {
		//console.log('users');
		console.log(JSON.stringify(docs, undefined, 2));
	});	
	    
  //db.close();
});
