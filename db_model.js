// This file shows all mongodb data schemas which can be used in nodejs application.
var db_model = {};

db_model.configurations = function(){
	this.isApiRunning = true;
}

db_model.appLog = function(){
	this.logId = '';
	this.title = '';
	this.message = '';
	this.level = '';
	this.datetime = new Date();
	this.source = '';
	this.innerMessage = '';
}

/* ********************************************************************************** */
db_model.customer = function(){
	this.wechatId = ''; // Get it from Wechat API.
	this.name = '';
	this.nickname = '';
	this.gender = 'Male';
	this.email = '';
	this.cellphone = '';
}

db_model.artisan = function(){
	this.artisanId = '';
	this.name = '';
	this.wechatId = '';
	this.cellphone = '';
	this.description = '';
	this.city = '';
	this.geo = '';
}

db_model.book = function(){
	this.bookId = '';
	this.title = '';
	this.subTitle = '';
	this.description = '';
	this.primaryImage = '';
	this.primaryVideo = '';
	this.images = [];
}

db_model.bookSteps = function(){
	this.stepId = '';
	this.name = '';
	this.content = '';
	this.images = [];
	this.videos = [];
}

db_model.bookStuffs = function(){
	this.stuffId = '';
	this.title = '';
	this.description = '';
	this.price = 0;
	this.images = [];
}

db_model.utility = function(){
	this.utilityId = '';
	this.name = '';
	this.description = '';
	this.images = [];
	this.price = 0;
}

db_model.lesson = function(){
	this.lessonId = '';
	this.title = '';
	this.customerIds = [];
	this.artisanId = '';
	this.bookId = '';
	this.datetime = '';
	this.place = '';
	this.price = 0;
}

db_model.order = function(){
	this.orderId = '';
	this.type = ''; // can be utility, lesson, stuff...
	this.quantity = 1;
	this.summary = 0;
	this.paymentId = '';
	this.customerId = '';
	this.lessonId = '';
	this.utilityId = '';
	this.stuffId = '';
}

db_model.payment = function(){
	this.paymentId = '';
	this.summary = 0;
	this.isPaid = 0;
	this.transaction = '';
	this.method=''; // can be wechat, unionpay, credit_card
}

module.exports = db_model;
