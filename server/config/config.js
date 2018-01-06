var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = require('./config.json');
    var envConfig = config[env];
    
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}

//if (env === 'development') {
//    process.env.PORT = 8000;
//    process.env.MONGO_URI = 'mongodb://localhost:27017/TodoApp';
//}