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
var book = require('./route/bookSteps');
var book = require('./route/bookStuffs');
var book = require('./route/customer');
var book = require('./route/lesson');
var book = require('./route/order');
var book = require('./route/payment');
var book = require('./route/utility');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

