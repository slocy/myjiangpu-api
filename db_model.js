// This file shows all mongodb data schemas which can be used in nodejs application.
var db_model = function(){};

db_model.configurations = {
	isApiRunning : true,
}

db_model.appLog = {
	logId : '',
	title : '',
	message : '',
	level : '',
	datetime : new Date(),
	source : '',
	innerMessage : '',
}

/* ********************************************************************************** */
db_model.customer = {
	wechatId : '', // Get it from Wechat API.
	name : '',
	nickname : '',
	gender : 'Male',
	email : '',
	cellphone : '',
}

db_model.artisan = {
	artisanId : '',
	name : '',
	wechatId : '',
	cellphone : '',
	description : '',
	city : '',
	geo : '',
}

db_model.book = {
	bookId : '',
	title : '',
	subTitle : '',
	description : '',
	primaryImage : '',
	primaryVideo : '',
	images : [],
}

db_model.bookSteps = {
	stepId : '',
	name : '',
	content : '',
	images : [],
	videos : [],
}

db_model.bookStuffs = {
	stuffId : '',
	title : '',
	description : '',
	price : 0,
	images : [],
}

db_model.utility = {
	utilityId : '',
	name : '',
	description : '',
	images : [],
	price : 0,
}

db_model.lesson = {
	lessonId : '',
	title : '',
	customerIds : [],
	artisanId : '',
	bookId : '',
	datetime : '',
	place : '',
	price : 0,
}

db_model.order = {
	orderId : '',
	type : '', // can be utility, lesson, stuff...
	quantity : 1,
	summary : 0,
	paymentId : '',
	customerId : '',
	lessonId : '',
	utilityId : '',
	stuffId : '',
}

db_model.payment = {
	paymentId : '',
	summary : 0,
	isPaid : 0,
	transaction : '',
	method : '', // can be wechat, unionpay, credit_card
}

module.exports = db_model;
