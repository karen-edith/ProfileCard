const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://karen_edith:kombucha1988!@ds117913.mlab.com:17913/my-first-db";
const bodyParser = require('body-parser');
const app = express();
/*const cors = require('cors');*/

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

/*app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())*/

router.get('/get/:displayName&:password', (req, res) => {

  let myquery = {
    'displayName': req.params.displayName,
    'password': req.params.password
  };

  MongoClient.connect(url, function(err, client){
    if (err) return console.log(err);
    const db = client.db('my-first-db');
    db.collection("reactUserInfo").findOne(myquery, function(err, result){
      if (err) {
        return console.log(err);
      }
      return res.json(result);
    });
    client.close();
  });
});

router.get('/list', (req, res) => {
  let resulArray = [];

  MongoClient.connect(url, function(err, client){
    if (err) return console.log(err);
    const db = client.db('my-first-db');
    db.collection('reactUserInfo').find().toArray(function(err, result){
      if (err) {return console.log(err)
      }
      console.log(result);
      res.json(result);
    });
    client.close();
  });
});

router.post('/post/:displayName&:firstName&:lastName&:email&:password', (req, res) => {
  let dat = {
    displayName: req.params.displayName,
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    email: req.params.email,
    password: req.params.password
  };

  MongoClient.connect(url, function(err, client){
    if(err) return console.log(err);
    const db = client.db('my-first-db');
    db.collection('reactUserInfo').save(dat, function(err, result){
      if (err) {
        console.log(err);
      }
      console.log(result.ops[0]._id);
      return res.json(result.ops[0]);
    });
      client.close();
  });
});

router.put('/update/:displayName&:firstName&:lastName&:email&:password', (req, res) => {

  let dat ={
    displayName: req.params.displayName,
    firstName: req.params.firstName,
    lastName: req.params.lastName,
    email: req.params.email,
    password: req.params.password
  }

  let myquery = {'displayName': req.params.displayName};

  MongoClient.connect(url, function(err, client){
    if (err) return console.log (err);
    db = client.db('my-first-db');
    db.collection('reactUserInfo').updateOne(myquery, {$set: dat}, function(err, result){
      if (err) {
        return console.log(err);
      }
      console.log(result);
      return res.json(result);
    });
    client.close();
  });
});



router.delete('/delete/:displayName', (req, res) => {

  let myquery = {'displayName': req.params.displayName};

  MongoClient.connect(url, function(err, client){
    if (err) return console.log(err);
    const db = client.db('my-first-db');
    db.collection('reactUserInfo').deleteOne(myquery, function(err, result){
      if (err){
        console.log(err);
      }
      return res.json(result);
    })
      client.close();
  });
});

module.exports = router;
