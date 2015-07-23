var express = require('express');
var router = express.Router();

/*
Method:
	GET /utility?utilityId=1
	Get the utility list of selected one.
Parameters:
	# utilityId
Result:
	The Json item of specified tool.
*/
router.get('/', function(req, res, next) {
	res.send({});
});

module.exports = router;
