var express = require('express')
var mongoose = require('mongoose')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')


//sets up middleware to use in app
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

//connect to mongodb using mongoose
mongoose.connect('mongodb://localhost:27017/favoriteFood',
{useNewUrlParser:true
}).then(function(){
    console.log("Connected to Database")
}).catch(function(){
console.log(err);
})
//load database template
require('./models/Food')
//var refernce

var Food = mongoose.model('food')
// data entry
/*var Food = mongoose.model('Food', {nameoffood:String})

var food = new Food({nameoffood:"Pizza"});

food.save().then(function(){
    console.log("Food entry was saved")
})*/
app.post('/saveFoodEntry', function(req,res){
    console.log("Request Made")
    console.log(req.body)

    new Food(req.body).save().then(function(){
        console.log("Data Saved")
        res.redirect('foodlist.html')
    })
})
app.post('/deleteFood',function(req,res){
    console.log("Food deleted: ",req.body._id)
    Food.findByIdAndDelete(req.body._id).exec()
})
//set up static
app.use(express.static(__dirname+"/views"))
app.listen(3000, function(){
    console.log("Connected on Port 3000")
});

app.get('/getData',function(req,res){
    Food.find({}).then(function(food){
        res.json({food})
    })

})
