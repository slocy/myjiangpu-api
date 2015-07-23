var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mgClient = mongodb.MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
	mgClient.connect('mongodb://localhost:27017/PilotDatabase', function(err,db){
		if(err) return console.dir(err);

		var init = db.collection('InitUsers');

		init.find({userid : 2}, function(err, item){
			console.log(item);
		});

		db.close();
		
		return res.send(result);
	});
});

module.exports = router;
