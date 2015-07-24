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
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('order');

		var query = {orderId: parseInt(req.query.orderId || 0)};
		
		clc.findOne(query, function(err,doc){
			res.send(doc);

			db.close();
		});
	});
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
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('order');

		var query = {customerId: parseInt(req.query.customerId || 0)};
		
		clc.find(query).toArray(err, function(err,docs){
			res.send(docs);

			db.close();
		});
	});
});

module.exports = router;
