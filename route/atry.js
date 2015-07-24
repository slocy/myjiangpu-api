var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mgClient = mongodb.MongoClient;
var mdl = require('../db_model');

/* GET home page. */
router.get('/', function(req, res, next) {
	mgClient.connect(new mdl().configurations.mongodbUrl, function(err,db){
		if(err) return console.dir(err);

		var query = {logId: parseInt(req.query.uId)};

		var clc = db.collection('appLog');
		
		clc.findOne(query, function(err,docs){
			res.send(docs);

			db.close();
		});
	});
});

module.exports = router;

