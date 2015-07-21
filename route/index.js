var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var t = {id:1, name:'Get'};

	res.send(t);
});

router.post('/', function(req, res, next) {
	var t = {time:new Time(), name:'Post'};

	res.send(t);
});

router.put('/', function(req, res, next) {
	var t = {time:new Time(), name:'Put'};

	res.send(t);
});

module.exports = router;
