// This file shows all mongodb data schemas which can be used in nodejs application.
db_model = {
	appLog : {
		logId : '',
		title : '',
		message : '',
		level : '',
		datetime : new Date(),
		source : '',
		innerMessage : '',
	};

	/* ********************************************************************************** */
	customer : {
		wechatId : '', // Get it from Wechat API.
		name : '',
		nickname : '',
		gender : 'Male',
		email : '',
		cellphone : '',
	};

	artisan = {
		artisanId : '',
		name : '',
		wechatId : '',
		cellphone : '',
		description : '',
		city : '',
		geo : '',
	};

	book = {
		bookId : '',
		title : '',
		subTitle : '',
		description : '',
		primaryImage : '',
		primaryVideo : '',
		images : [],
	};

	bookSteps = {
		stepId : '',
		name : '',
		content : '',
		images : [],
		videos : [],
	};

	bookStuffs = {
		stuffId : '',
		title : '',
		description : '',
		price : 0,
		images : [],
	};

	utility = {
		utilityId : '',
		name : '',
		description : '',
		images : [],
		price : 0,
	};

	lesson = {
		lessonId : '',
		title : '',
		customerIds : [],
		artisanId : '',
		bookId : '',
		datetime : '',
		place : '',
		price : 0,
	};

	order = {
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

	payment = {
		paymentId : '',
		summary : 0,
		isPaid : 0,
		transaction : '',
		method : '', // can be wechat, unionpay, credit_card
	};

	configurations = {
		isApiRunning : true,
	};
};

module.exports = db_model;
