const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aeb68bfcecedc15f8a9a3e3';
var userid = '5ae0d795c36ac71d0ba8c4b9'

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todobyid) => {
//   if (!todobyid) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todobyid);
// }).catch((e) => console.log(e));

User.findById(userid).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user);
}).catch((e) => console.log(e));
