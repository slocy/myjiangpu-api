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
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('artisan');

		var query = {artisanId: parseInt(req.query.artisanId || 0)};
		
		clc.findOne(query, function(err,doc){
			res.send(doc);

			db.close();
		});
	});
});


module.exports = router;
