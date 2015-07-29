var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mgClient = mongodb.MongoClient;
var db_model = require('../db_model');
var funct = require('../lib/func');

var mdl = new db_model();
var func = new funct();

var _bookId = func.guid();
var _artisanId = func.guid();

mdl.book = {
	bookId : _bookId,
	title : '蔷薇胸花',
	subTitle : '来自茹萍的胸针设计',
	artisanId : _artisanId,
	description : '自然风干的蔷薇和银叶菊，嵌有星星点点的冬菇草，跟着匠谱，你手中的植物就会有新的可能。如果你在夏天喜欢穿浅色裙子，那你需要这样一枚胸针。',
	stuff : '干燥植物：黄蔷薇（1）、银叶菊（1）、冬菇草（3～5）、珊瑚果（2）<br/>其他工具：胸针（1）、草绳、剪刀、热熔胶枪',
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
	createDate: new Date(2015, 7, 28),
};

mdl.artisan = {
	artisanId : _artisanId,
	name : '茹茹萍',
	fullName: '陈茹萍',
	wechatId : '',
	cellphone : 'N/A',
	description : '毕业于中央美术学院，捣腾在植物与手工之间，坚持做喜欢的事情，努力让喜欢的事情有价值。',
	city : '厦门',
	address : '厦门市思明区旧物仓',
	createDate: new Date(2015, 7, 27),
};

mdl.bookSteps = {
	stepId : func.guid(),
	name : '步骤一',
	bookId : _bookId,
	content : '以银叶菊为底，挑选三五根冬菇草，具体可根据银叶菊的大小选择合适的冬菇草数量，以视觉舒适为佳。',
	images : [
		'http://wx-ast.slocy.cn/image/step/adore-xiongzhen/1.jpg',
	],
	videos : [],
	createDate: new Date(2015, 7, 28),
	updateDate: new Date(2015, 7, 28),
}

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

		db.collection('artisan').insert(mdl.artisan, function(err,result){});

		db.collection('book').insert(mdl.book, function(err,result){});

		db.collection('bookSteps').insert(mdl.bookSteps, function(err,result){});
	});
});

module.exports = router;
