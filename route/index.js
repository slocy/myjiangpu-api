var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var t = {id:1, name:'Kris'};
	
	res.send(t);
});

router.post('/', function(req, res, next) {
	var t = {id:1, name:'Post'};

	res.send(t);
});

module.exports = router;
