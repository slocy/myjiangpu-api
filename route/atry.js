var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var initUsersSchema = mongoose.Schema({
    userid: Number,
    username: String,
    auth_path: String,
    auth_date: String
});

/* GET home page. */
router.get('/', function(req, res, next) {
	mongoose.connect('mongodb://localhost/pilotdatabase');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
	  console.log('opened');
	});

	var init = mongoose.model('init', initUsersSchema);
	//var i = new init({ userid: 3, username: 'mongoose', auth_path:'123', auth_date: '2015-01-01' });
	//console.log(i.username); 

	var result = init.find();

	//var t = {id:1, name:'Kris'};
	res.send(resutl);
});

module.exports = router;
