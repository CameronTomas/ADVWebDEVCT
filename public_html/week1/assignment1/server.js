var express = require('express')
var app = express()
var path = require('path')
var port =3000;
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
})
app.get('/todo.json', function(req,res){
    res.sendFile(path.join(__dirname+'/todo.json'))
})
app.get("/read-todo.html", function(req,res){
    res.sendFile(path.join(__dirname+'/read-todo.html'))
})
app.listen(port, function(){
    console.log("Connected on Port 3000")
})