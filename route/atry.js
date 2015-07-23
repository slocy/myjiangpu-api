var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mgClient = mongodb.MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
	mgClient.connect('mongodb://localhost:27017/pilotdatabase', function(err,db){
		if(err) return console.dir(err);

		var init = db.collection('InitUsers');

		res.send(init.findOne());
	});
});

module.exports = router;
