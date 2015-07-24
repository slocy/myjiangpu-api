var express = require('express');
var router = express.Router();

/*
Method:
	GET /payment?customerId=1&paymentId=1
	Get the payment detail of specified payment.
Parameters:
	# customerId
	# paymentId
Result:
	The Json item of specified payment.
*/
router.get('/', function(req, res, next) {
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('payment');

		var query = {
			customerId: parseInt(req.query.customerId || 0),
			paymentId: parseInt(req.query.paymentId || 0),
		};
		
		clc.findOne(query, function(err,doc){
			res.send(doc);

			db.close();
		});
	});
});

/*
Method:
	POST /payment?customerId=1&isPaid=true&summary=10&method=wechat&quantity=1&lessonid=1...
	Add new payment information of selected customer for lesson/stuff/utility.
Parameters:
	# customerId
	# isPaid => true/false
	# summary
	# method => should be wechat...
	# quantity
	# lessionId
	# bookStuffId
	# utilityId
Result:
	# 0 => Opertion completed successfully.
	# err => Operation failed.
*/
router.post('/', function(req, res, next) {
	res.send({});
});

/*
Method:
	PUT /payment/setPaid?customerId=1&isPaid=true&paymentId=1
	Update the payment status to Paid.
Parameters:
	# customerId
	# isPaid => true/false]
	# paymentId
Result:
	# 0 => Opertion completed successfully.
	# err => Operation failed.
*/
router.put('/setPaid', function(req, res, next) {
	res.send({});
});



module.exports = router;
