// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connection to MongoDB server was successful');
    
//    db.collection('Todos').deleteMany({text: 'Eat shit'}).then((result) => {
//        console.log(result);
//    });
    
//    db.collection('Todos').deleteOne({text: 'Eat shit'}).then((result) => {
//        console.log(result);
//    });
    
//    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//        console.log(result);
//    }, (err) => {
//        console.log('Unable to delete ', err);
//    });
    
    db.collection('Users').deleteMany({name: 'Dwip Kumar Paul'}).then((result) => {
        console.log(result);
    });
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a4555190823ed1d2194e541')
    }).then((result) => {
        console.log(result);
    })
    
    // db.close();
});