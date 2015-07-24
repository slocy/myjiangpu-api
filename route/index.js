var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var seq = 0;

	if(req.query.id){
		seq = req.query.id;
	}

	var t = {id:1, name:'Get', seq: seq, ip:req.ip};

	res.send(t);
});

module.exports = router;