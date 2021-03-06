var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var hbs = require('hbs')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerHelper('table',function(num){
    var times = num * num
    var times2 =1
    var msg = `<tr>`
    var color
    for(var i = 0; i<times; i++){
        color = ((1<< 24)*Math.random()|0).toString(16)
       msg +=  `<td style="background-color:#${color}">${color}<br/><span style ="color:#ffffff">${color}</span></td>`
       if(i+1 == num * times2){
           msg += `</tr>`
           if(i != times){
                msg += `<tr>`
           }
           times2++
       }
    }
    return new hbs.handlebars.SafeString(msg)
})
<<<<<<< HEAD
hbs.registerHelper('message',function(){
    min = Math.ceil(20);
    max = Math.floor(50);
    times = Math.random() * (max - min + 1) + min
    msg2 = ``
    for(var i = 0; i<times; i++){
        msg2 += `<div`
        classe = Math.random() * (2 - 1 + 1) + 1
        if (classe == 1) {
            msg2 += `class='shrink'>404</div>`
            
        }else if (classe == 2) {
            msg2 += `class='rotate'>404</div>`
            
        }
    }
    return new hbs.handlebars.SafeString(msg2)
})
=======
>>>>>>> 7d4afb02d0ff984eace58c5fcb819f16c70f074c
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/slect', indexRouter);
app.post('/',function(req,res){
    console.log(req.body);
    res.render('index.hbs',{
        table:req.body.num
    })
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
