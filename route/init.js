var express = require('express');
var router = express.Router();

/*
Method:
	GET /book/list
	Get the list of Jiang books
Parameters:
	# N/A
Result:
	the Json array list with summary of all Jiang books.
*/
router.get('/list', function(req, res, next) {
	res.send({});
});

module.exports = router;
