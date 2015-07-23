var express = require('express');
var router = express.Router();

/*
Method:
	GET /customer?customerId=1
	Get the customer detail of select customer
Parameters:
	# customerId
Result:
	The Json item of current customer
*/
router.get('/', function(req, res, next) {
	res.send({});
});

/*
Method:
	POST /customer?wechatKey=xxx&customerName=xxx&sex=male
	Add or update the customer information. So far, this action will be used in Wechat.
Parameters:
	# wechatKey
	# customerName
	# Nickname
	# City
	# Geo
Result:
	0 -> Whether if this operation is completed successfully.
	error -> Operation failed.
*/
router.post('/', function(req, res, next) {
	res.send({});
});

/*
Method:
	GET /customer/wechatAddresses?customerId=1
	Get the customer WeChat's addresses of select one.
Parameters:
	# customerId
Result:
	The Json item of current customer's Wechat addresses.
*/
router.get('/wechatAddresses', function(req, res, next) {
	res.send({});
});

module.exports = router;
