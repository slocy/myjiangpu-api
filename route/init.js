var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mgClient = mongodb.MongoClient;
var db_model = require('../db_model');
var funct = require('../lib/func');

var mdl = new db_model();
var func = new funct();

mdl.book = {
	bookId : func.guid(),
	title : '一朵胸针',
	subTitle : '来自茹萍的胸针设计',
	description : 'asdfasdf,asdf,asdf  asdfasd,f asdfasdf,,asdf  asdf,as,df,, asdfasdf',
	primaryImage : 'http://mp.weixin.qq.com/image/first.jpg',
	primaryVideo : 'http://mp.weixin.qq.com/image/first.mp4',
	images : [
		'http://mp.weixin.qq.com/image/image-1.jpg',
		'http://mp.weixin.qq.com/image/image-2.jpg',
		'http://mp.weixin.qq.com/image/image-3.jpg',
	],
};

mdl.artisan = {
	artisanId : func.guid(),
	name : '茹茹萍',
	fullName: '茹萍',
	wechatId : '',
	cellphone : 'N/A',
	description : '',
	city : 'Xiamen',
	address : '厦门市思明区旧物仓',
	createDate: new Date(2015, 7, 27),
};

/*
Method:
	GET /init/db
	Init the database basic data from Javascript.
Parameters:
	# N/A
Result:
	N/A
*/
router.get('/db', function(req, res, next) {
	mgClient.connect(new db_model().cfg.dbUrl, function(err,db){
		if(err) return console.dir(err);

		var clc = db.collection('book');

		var query = mdl.book;
		
		clc.insert(query, function(err,result){
			res.send(result);
			db.close();
		});
	});
});

module.exports = router;
