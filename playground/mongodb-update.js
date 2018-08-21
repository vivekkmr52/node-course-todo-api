//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}	
	console.log('Connected to MongoDB server');
  
	db.collection('User').findOneAndUpdate({
		_id: new ObjectID('5b7bf9aa660bab6284e48e7a')
	},{
		$set: {
			name: 'Vivek'
		}
	}, {
		returnOriginal: false
	}).then((err, results) => {
		if(err){
			return console.log(err);
		}
		console.log(results);
	 });
	
  //db.close();
});
