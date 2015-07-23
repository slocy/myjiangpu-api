// This file shows all mongodb data schemas which can be used in nodejs application.
var db_model = function(){
	this.db_model.appLog = {
		logId : '',
		title : '',
		message : '',
		level : '',
		datetime : new Date(),
		source : '',
		innerMessage : '',
	};

	/* ********************************************************************************** */
	this.db_model.customer = {
		wechatId : '', // Get it from Wechat API.
		name : '',
		nickname : '',
		gender : 'Male',
		email : '',
		cellphone : '',
	};

	this.db_model.artisan = {
		artisanId : '',
		name : '',
		wechatId : '',
		cellphone : '',
		description : '',
		city : '',
		geo : '',
	};

	this.db_model.book = {
		bookId : '',
		title : '',
		subTitle : '',
		description : '',
		primaryImage : '',
		primaryVideo : '',
		images : [],
	};

	this.db_model.bookSteps = {
		stepId : '',
		name : '',
		content : '',
		images : [],
		videos : [],
	};

	this.db_model.bookStuffs = {
		stuffId : '',
		title : '',
		description : '',
		price : 0,
		images : [],
	};

	this.db_model.utility = {
		utilityId : '',
		name : '',
		description : '',
		images : [],
		price : 0,
	};

	this.db_model.lesson = {
		lessonId : '',
		title : '',
		customerIds : [],
		artisanId : '',
		bookId : '',
		datetime : '',
		place : '',
		price : 0,
	};

	this.db_model.order = {
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

	this.db_model.payment = {
		paymentId : '',
		summary : 0,
		isPaid : 0,
		transaction : '',
		method : '', // can be wechat, unionpay, credit_card
	};

	this.db_model.configurations = {
		isApiRunning : true,
	};
};

module.exports = db_model;
