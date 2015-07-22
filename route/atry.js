var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
	mongoose.connect('mongodb://localhost/pilotdatabase');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
	  console.log('opened');
	});

	var t = {id:1, name:'Kris'}
	res.send(t);
});

module.exports = router;
