const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// connecting MongoDB 
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser : true
}).then(() => {
    console.log('Successfully connected to MongoDB');
}).catch(err => {
    console.log('Due to some error exiting process', err);
    process.exit();
})
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
// adiing routes
require('./App/Routes/note.routes')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});