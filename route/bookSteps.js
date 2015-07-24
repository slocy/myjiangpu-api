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
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('bookSteps');

		var query = {bookId: parseInt(req.query.bookId || 0)};
		
		clc.find(query).toArray(err, function(err,docs){
			res.send(docs);

			db.close();
		});
	});
});

module.exports = router;
