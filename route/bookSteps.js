var express = require('express');
var router = express.Router();

/*
Method:
	GET /booksteps?bookId=1
	Get the step list of selected Jiang book
Parameters:
	# bookId
Result:
	the Json array list with summary of current Jiang book.
*/
router.get('/', function(req, res, next) {
	res.send({});
});

module.exports = router;
