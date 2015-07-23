// This file shows all mongodb data schemas which can be used in nodejs application.
var db_model = function(){
	var appLog = {
		logId : '',
		title : '',
		message : '',
		level : '',
		datetime : new Date(),
		source : '',
		innerMessage : '',
	};

	/* ********************************************************************************** */
	var customer = {
		wechatId : '', // Get it from Wechat API.
		name : '',
		nickname : '',
		gender : 'Male',
		email : '',
		cellphone : '',
	};

	var artisan = {
		artisanId : '',
		name : '',
		wechatId : '',
		cellphone : '',
		description : '',
		city : '',
		geo : '',
	};

	var book = {
		bookId : '',
		title : '',
		subTitle : '',
		description : '',
		primaryImage : '',
		primaryVideo : '',
		images : [],
	};

	var bookSteps = {
		stepId : '',
		name : '',
		content : '',
		images : [],
		videos : [],
	};

	var bookStuffs = {
		stuffId : '',
		title : '',
		description : '',
		price : 0,
		images : [],
	};

	var utility = {
		utilityId : '',
		name : '',
		description : '',
		images : [],
		price : 0,
	};

	var lesson = {
		lessonId : '',
		title : '',
		customerIds : [],
		artisanId : '',
		bookId : '',
		datetime : '',
		place : '',
		price : 0,
	};

	var order = {
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

	var payment = {
		paymentId : '',
		summary : 0,
		isPaid : 0,
		transaction : '',
		method : '', // can be wechat, unionpay, credit_card
	};

	var configurations = {
		isApiRunning : true,
	};
};

module.exports = db_model;
