// This file shows all mongodb data schemas which can be used in nodejs application.
function configurations(){
	this.isApiRunning = true;
}

function appLog(){
	this.logId = '';
	this.title = '';
	this.message = '';
	this.level = '';
	this.datetime = new Date();
	this.source = '';
	this.innerMessage = '';
}

/* ********************************************************************************** */

function customer(){
	this.wechatId = ''; // Get it from Wechat API.
	this.name = '';
	this.nickname = '';
	this.gender = 'Male';
	this.email = '';
	this.cellphone = '';
}

function artisan(){
	this.artisanId = '';
	this.name = '';
	this.wechatId = '';
	this.cellphone = '';
	this.description = '';
	this.city = '';
	this.geo = '';
}

function book(){
	this.bookId = '';
	this.title = '';
	this.subTitle = '';
	this.description = '';
	this.primaryImage = '';
	this.primaryVideo = '';
	this.images = [];
}

function bookSteps(){
	this.stepId = '';
	this.name = '';
	this.content = '';
	this.images = [];
	this.videos = [];
}

function bookStuffs(){
	this.stuffId = '';
	this.title = '';
	this.description = '';
	this.price = 0;
	this.images = [];
}

function utility(){
	this.utilityId = '';
	this.name = '';
	this.description = '';
	this.images = [];
	this.price = 0;
}

function lesson(){
	this.lessonId = '';
	this.title = '';
	this.customerIds = [];
	this.artisanId = '';
	this.bookId = '';
	this.datetime = '';
	this.place = '';
	this.price = 0;
}

function order(){
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

function payment(){
	this.paymentId = '';
	this.summary = 0;
	this.isPaid = 0;
	this.transaction = '';
	this.method=''; // can be wechat, unionpay, credit_card
}
