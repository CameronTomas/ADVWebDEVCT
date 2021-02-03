var express = require('express')
var hbs = require('hbs')
var app = express()

var randNum = require('./modules/randomNum');
app.set('view engine', 'hbs')
hbs.registerHelper('ptag',function(num, messageToPassIn){
    var msg = ""
    for(var i = 0; i<num; i++){
       msg +=  `<p>${messageToPassIn}</p>`
    }
    return new hbs.handlebars.SafeString(msg)
})
app.get('/form',function(req,res){
    res.render('form.hbs')
})
app.post('/results',function(req,res){
    console.log(req.body)
    res.render('results.hbs',{
        num:req.body.testNumber
    })
})
console.log(randNum.rando());