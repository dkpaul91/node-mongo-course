const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5a4b91e63486018e12a9219911';
//
//if(!ObjectID.isValid(id)) {
//    console.log('ID not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//    console.log('Todos ', todos);
//});
//
//Todo.findOne({
//    _id: id
//}).then((todo) => {
//    console.log('Todo ', todo);
//});

//Todo.findById(id).then((todo) => {
//    if(!todo) {
//        return console.log('ID not found');
//    }
//    console.log('Todo By ID ', todo);
//}).catch((err) => {
//    console.log(err);
//});

//var id = '5a4ce4fe9dacb77818be265f11';
//
//if(!ObjectID.isValid(id)) {
//    console.log('ID not valid');
//}
//
//User.findById(id).then((user) => {
//    if(!user) {
//        return console.log('User not found');
//    }
//    console.log('User by ID ', user);
//}).catch((err) => {
//    console.log(err);
//});

User.findById('5a4ce4fe9dacb77818be265f').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
})