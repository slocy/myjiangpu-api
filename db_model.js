// This file shows all mongodb data schemas which can be used in nodejs application.
var db_model = function(){
	this.appLog = {
		logId : '',
		title : '',
		message : '',
		level : '',
		datetime : new Date(),
		source : '',
		innerMessage : '',
	};

	/* ********************************************************************************** */
	this.customer = {
		wechatId : '', // Get it from Wechat API.
		name : '',
		nickname : '',
		gender : 'Male',
		email : '',
		cellphone : '',
	};

	this.artisan = {
		artisanId : '',
		name : '',
		wechatId : '',
		cellphone : '',
		description : '',
		city : '',
		geo : '',
	};

	this.book = {
		bookId : '',
		title : '',
		subTitle : '',
		description : '',
		primaryImage : '',
		primaryVideo : '',
		images : [],
	};

	this.bookSteps = {
		stepId : '',
		name : '',
		content : '',
		images : [],
		videos : [],
	};

	this.bookStuffs = {
		stuffId : '',
		title : '',
		description : '',
		price : 0,
		images : [],
	};

	this.utility = {
		utilityId : '',
		name : '',
		description : '',
		images : [],
		price : 0,
	};

	this.lesson = {
		lessonId : '',
		title : '',
		customerIds : [],
		artisanId : '',
		bookId : '',
		datetime : '',
		place : '',
		price : 0,
	};

	this.order = {
		orderId : '',
		type : '', // can be utility, lesson, stuff...
		quantity : 1,
		summary : 0,
		paymentId : '',
		customerId : '',
		lessonId : '',
		utilityId : '',
		stuffId : '',
	};

	this.payment = {
		paymentId : '',
		summary : 0,
		isPaid : 0,
		transaction : '',
		method : '', // can be wechat, unionpay, credit_card
	};

	this.cfg = {
		isApiRunning : true,
		dbUrl : 'mongodb://localhost:27017/jbookdb',
	};
};

module.exports = db_model;
