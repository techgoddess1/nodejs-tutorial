const dotenv = require("dotenv");

const path = require("path");
const mongoose = require('mongoose');

dotenv.config({
 path: path.resolve(__dirname,"../.env")
});

const Config = Object.freeze({
    App: {
        PORT : process.env.PORT
    },
    Mongo: {
        URI:process.env.MONGO_URI
    }
});

console.log('project Configuration', Config);

mongoose.connect(Config.Mongo.URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true 
    });

module.exports = Config;
