var express = require('express');
var router = express.Router();

/*
Method:
	GET /utility?utilityId=1
	Get the utility detail of selected one.
Parameters:
	# utilityId
Result:
	The Json item of specified tool.
*/
router.get('/', function(req, res, next) {
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('utility');

		var query = {
			utilityId: parseInt(req.query.utilityId || 0),
		};
		
		clc.findOne(query, function(err,doc){
			res.send(doc);

			db.close();
		});
	});
});

module.exports = router;
