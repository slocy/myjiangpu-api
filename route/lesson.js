var express = require('express');
var router = express.Router();

/*
Method:
	GET /lesson/list?artisanId=1&status=open
	Get the lesson list of selected artisan
Parameters:
	# artisanId
	# status => open, close, pending
	# orderby => default in time asc.
Result:
	The Json list for leasson of selected artisan.
*/
router.get('/list', function(req, res, next) {
	res.send({});
});

/*
Method:
	GET /lesson?lessonId=1
	Get the lesson detail of current one.
Parameters:
	# lessonId
Result:
	The Json detail of selected artisan.
*/
router.get('/', function(req, res, next) {
	res.send({});
});

/*
Method:
	POST /apply?lessonId=1&customerId=1&isPaid=true
	Apply the lesson with customer in specified.
Parameters:
	# lessonId
	# customerId
	# isPaid => true/false
Result:
	# 0 => Opertion completed successfully.
	# err => Operation failed.
*/
router.post('/apply', function(req, res, next) {
	res.send({});
});

/*
Method:
	PUT /setPaid?lessonId=1&customerId=1&isPaid=true
	Set the lesson the customer booked to Paid
Parameters:
	# lessonId
	# customerId
	# isPaid => true/false
Result:
	# 0 => Opertion completed successfully.
	# err => Operation failed.
*/
router.put('/setPaid', function(req, res, next) {
	res.send({});
});

module.exports = router;
