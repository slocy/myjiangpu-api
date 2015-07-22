var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var t = {id:1, name:'Kris'}
	res.send(t);
});

module.exports = router;
