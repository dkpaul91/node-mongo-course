// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connection to MongoDB server was successful');
    
//    db.collection('Todos').find({
//        _id: new ObjectID('5a45f886cf8b3a4ca6fd58d5')
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch documents ', err);
//    });
    
//     db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);        
//    }, (err) => {
//        console.log('Unable to fetch documents ', err);
//    });
    
    db.collection('Users').find({name: 'Dwip Kumar Paul'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch documents ', err);
    });
    
    // db.close();
});