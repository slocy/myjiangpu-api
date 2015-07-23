var express = require('express');
var router = express.Router();

/*
Method:
	GET /order?orderId=1
	Get the order detail of selected one.
Parameters:
	# orderId
Result:
	The Json item of order detail
*/
router.get('/', function(req, res, next) {
	res.send({});
});

/*
Method:
	POST /order?customerId=1&quantity=1&lessonId=1&utilityId=1&stuffId=1
	Get the order detail of selected one.
Parameters:
	# customerId
	# quantity
	# lessonId
	# utilityId
	# stuffId
Result:
	# 0 => Opertion completed successfully.
	# err => Operation failed.
*/
router.post('/', function(req, res, next) {
	res.send({});
});

/*
Method:
	GET /order/list?customerId=1
	Get the order detail of selected one.
Parameters:
	# customerId
Result:
	The Json order list of selected customer
*/
router.get('/list', function(req, res, next) {
	res.send({});
});

module.exports = router;
