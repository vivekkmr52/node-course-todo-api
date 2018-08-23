const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove(_id = '5b7e4e5d720f42d753f20216').then((todo) => {
//   console.log(todo);
// });
//
Todo.findByIdAndRemove('5b7e5620720f42d753f20341').then((todo) => {
  console.log(todo);
  return;
});
