//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
let {Todo} = require('./../server/models/todo.js');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
  db.collection('todos').insertOne({
	text: 'Something to do',
	completed: false
	}, (err, result) => {
     if (err) {
       return console.log('Unable to insert todo', err);
     }

     console.log(JSON.stringify(result.ops, undefined, 2));
   });

   // db.collection('todos').insertOne({
		// name: 'Finn',
		// age: '21',
		// location: 'Bangalore, India'
   // }, (err, result) => {
		// if(err){
		// 	return console.log('Unable to insert to User',err);
		// } console.log(result.ops)
   // });
   /*db.collection('User').remove({age: 21}, true, (err, result) => {
		if(err){
			return console.log('Unable to insert to User',err);
		} console.log(result.ops)
		});*/
	db.close();
});
