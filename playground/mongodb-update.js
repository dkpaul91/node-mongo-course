// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connection to MongoDB server was successful');
    
//    db.collection('Todos').findOneAndUpdate({
//        _id: new ObjectID('5a465015cf8b3a4ca6fd72b7')
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    });
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a453164ad5b58121c1a3366')
    }, {
        $set: {
            name: 'Dwip Kumar Paul'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    // db.close();
});