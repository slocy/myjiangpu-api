// This file shows all mongodb data schemas which can be used in nodejs application.
var db_model = function(){
	this.appLog = {
		logId : String,
		title : String,
		message : String,
		level : 'log',
		datetime : new Date(),
		source : String,
		innerMessage : String,
	};

	/* ********************************************************************************** */
	this.customer = {
		wechatId : String, // Get it from Wechat API.
		name : String,
		nickname : String,
		gender : Boolean,
		email : String,
		cellphone : String,
		token: String,
	};

	this.artisan = {
		artisanId : String,
		name : String,
		wechatId : String,
		cellphone : String,
		description : String,
		city : String,
		address : String,
		createDate: Date,
	};

	this.book = {
		bookId : String,
		title : String,
		subTitle : String,
		description : String,
		primaryImage : String,
		primaryVideo : String,
		images : Array,
	};

	this.bookSteps = {
		stepId : String,
		name : String,
		content : String,
		images : Array,
		videos : Array,
	};

	this.bookStuffs = {
		stuffId : String,
		title : String,
		description : String,
		price : Number,
		images : Array,
	};

	this.utility = {
		utilityId : String,
		name : String,
		description : String,
		images : Array,
		price : Number,
	};

	this.lesson = {
		lessonId : String,
		title : String,
		customerIds : Array,
		artisanId : String,
		bookId : String,
		datetime : String,
		place : String,
		price : Number,
	};

	this.order = {
		orderId : String,
		type : String, // can be utility, lesson, stuff...
		quantity : Number,
		summary : Number,
		paymentId : String,
		customerId : String,
		lessonId : String,
		utilityId : String,
		stuffId : String,
	};

	this.payment = {
		paymentId : String,
		summary : Number,
		isPaid : Boolean,
		transaction : String,
		method : String, // can be wechat, unionpay, credit_card
	};

	this.cfg = {
		isApiRunning : true,
		dbUrl : 'mongodb://localhost:27017/jbookdb',
	};
};

module.exports = db_model;
