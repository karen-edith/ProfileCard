const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://karen_edith:kombucha1988!@ds117913.mlab.com:17913/my-first-db";
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*app.use(function(req, res, next) {
 res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
 res.setHeader(‘Access-Control-Allow-Credentials’, ‘true’);
 res.setHeader(‘Access-Control-Allow-Methods’, ‘GET,HEAD,OPTIONS,POST,PUT,DELETE’);
 res.setHeader(‘Access-Control-Allow-Headers’, ‘Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers’);
*/
app.use('/api/users', require('./api.js'));

server = app.listen(/*process.env.PORT ||*/ 8000, function(){
  console.log("Listening on Port 8000")
})
