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
	title : '蔷薇胸花',
	subTitle : '来自茹萍的胸针设计',
	description : '自然风干的蔷薇和银叶菊，嵌有星星点点的冬菇草，跟着匠谱，你手中的植物就会有新的可能。如果你在夏天喜欢穿浅色裙子，那你需要这样一枚胸针。',
	primaryImage : 'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/primary.jpg',
	primaryVideo : '',
	images : [
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/1.jpg',
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/2.jpg',
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/3.jpg',
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/4.jpg',
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/5.jpg',
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/6.jpg',
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/7.jpg',
		'http://wx-ast.slocy.cn/image/book/adore-xiongzhen/8.jpg',
	],
};

mdl.artisan = {
	artisanId : func.guid(),
	name : '茹茹萍',
	fullName: '陈茹萍',
	wechatId : '',
	cellphone : 'N/A',
	description : '毕业于中央美术学院，捣腾在植物与手工之间，坚持做喜欢的事情，努力让喜欢的事情有价值。',
	city : '厦门',
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
