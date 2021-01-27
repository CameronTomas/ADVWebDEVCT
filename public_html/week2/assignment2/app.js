var express = require('express')
var app = express()
var path = require('path')
var port =3000;

var indexRouter = require('./routes/index.js');
var aboutRouter = require('./routes/about.js');
var formRouter = require('./routes/form.js');
var usersRouter = require('./routes/users');
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
/*app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.hbs'))
})
app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname+'/views/about.hbs'))
})
app.get('/form', function(req,res){
    res.sendFile(path.join(__dirname+'/views/form.hbs'))
})*/

app.use("/", indexRouter)
app.use('/about', aboutRouter)
app.use('/form', formRouter)
app.use(express.static(__dirname+"/views"))
app.listen(port, function(){
    console.log("Connected on Port 3000")
})