var express = require('express');
var router = express.Router();

/*
Method:
	GET /artisan?artisanId=1
	Get the artisan information by artisanId, 
Parameters:
	# artisanId
Result:
	the Json item of artisan information.
*/
router.get('/', function(req, res, next) {
	res.send({});
});


module.exports = router;
