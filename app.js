var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var index = require('./route/index');
var auth = require('./route/auth');
var sharing = require('./route/sharing');

var artisan = require('./route/artisan');
var book = require('./route/book');
var bookSteps = require('./route/bookSteps');
var bookStuffs = require('./route/bookStuffs');
var customer = require('./route/customer');
var lesson = require('./route/lesson');
var order = require('./route/order');
var payment = require('./route/payment');
var utility = require('./route/utility');
var atry = require('./route/atry');
var init = require('./route/init');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use('/', index);
app.use('/sharing', sharing);
app.use('/auth', auth);

app.use('/artisan', artisan);
app.use('/book', book);
app.use('/bookSteps', bookSteps);
app.use('/bookStuffs', bookStuffs);
app.use('/customer', customer);
app.use('/lesson', lesson);
app.use('/order', order);
app.use('/payment', payment);
app.use('/utility', utility);
app.use('/atry', atry);
app.use('/init', init);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

