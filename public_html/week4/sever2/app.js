var express = require('express')
var hbs = require('hbs')
var app = express()

var randNum = require('./modules/randomNum');
app.set('view engine', 'hbs')
hbs.registerHelper('ptag',function(num){
    var msg = `<p>${num}</p>`
    return new hbs.handlebars.SafeString(msg)
})
app.get('/form',function(req,res){
    res.render('form.hbs')
})
app.get('/results',function(req,res){
    res.render('form.hbs')
})
console.log(randNum.rando());