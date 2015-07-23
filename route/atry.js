var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mgClient = mongodb.MongoClient;
var mdl = require('../db_model');

/* GET home page. */
router.get('/', function(req, res, next) {
	mgClient.connect('mongodb://localhost:27017/rockdb', function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('appLog');
		
		var rt = null;
		(function(x){
			clc.find().toArray(function(err, docs){
				x = docs;
			});
		})(rt);

		console.log(rt);

		//db.close();
	});
});

module.exports = router;





/*
var init = db.collection('InitUsers');

		init.insert({userid:3,username:'insert',auth_path:'test',auth_date:'2015-02-02'}, function(err,red){
			console.log(red);
		});

		init.findOne({userid : 2}, function(err, item){
			console.log(item);
		});
*/
