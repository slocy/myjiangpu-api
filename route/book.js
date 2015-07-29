var express = require('express');
var router = express.Router();

/*
Method:
	GET /book/list
	Get the list of Jiang books
Parameters:
	# N/A
Result:
	the Json array list with summary of all Jiang books.
*/
router.get('/list', function(req, res, next) {
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		db.collection('book').find().toArray(function(err,docs){
			res.send(docs);

			db.close();
		});
	});
});

/*
Method:
	GET /book?bookId=1
	Get the book detail by bookId, 
Parameters:
	# artisanId
Result:
	the Json item of Jiang book detail.
*/
router.get('/', function(req, res, next) {
	mgClient.connect(new mdl().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('book');

		var query = {bookId: parseInt(req.query.bookId || 0)};
		
		clc.findOne(query, function(err,doc){
			res.send(doc);

			db.close();
		});
	});
});

module.exports = router;
