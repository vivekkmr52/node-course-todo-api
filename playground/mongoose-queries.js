const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');

id = '5b7d27a88b57c13b08eb7a7e';

Todo.find({
  _id: id
}).then((todos) =>{
  console.log('Todos:',todos);
});

Todo.findOne({
  _id: id
}).then((todo) =>{
  console.log('Todo:',todo);
});

Todo.findById(id).then((todo) =>{
  console.log('Todo by id',todo);
});
