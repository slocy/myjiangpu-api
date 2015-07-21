var express = require('express');
var router = express.Router();

router.get('/sharing', function(req, res, next) {
	var t = {id:1, name:'sharing'}
	res.send(t);
});

module.exports = router;
