var express = require('express')
var hbs = require('hbs')
var app = express()

var randNum = require('./modules/randomNum');
app.set('view engine', 'hbs')
hbs.registerHelper('ptag',function(num){
    var msq = `<p>${num}</p>`
})
app.get('/form',function(req,res){
    res.render('form.hbs')
})
console.log(randNum.rando());