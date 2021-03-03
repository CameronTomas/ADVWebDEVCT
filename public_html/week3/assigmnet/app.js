
var mongoose = require('mongoose')
var app = express()
var path = require('path')
var bodyparser = require('body-parser')


//sets up middleware to use in app
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())
var indexRouter = require('./routes/index');
//connect to mongodb using mongoose
mongoose.connect('mongodb://localhost:27017/favoriteFood',
{useNewUrlParser:true
}).then(function(){
    console.log("Connected to Database")
}).catch(function(){
console.log(err);
})
//load database template
require('./models/Empl')
//var refernce

var Empl = mongoose.model('empl')

app.post('/saveEmployEntry', function(req,res){
    console.log("Request Made")
    console.log(req.body)

    new Food(req.body).save().then(function(){
        console.log("Data Saved")
        res.redirect('view.hbs')
    })
})
app.post('/deleteEmpl',function(req,res){
    console.log("Empl deleted: ",req.body._id)
    Food.findByIdAndDelete(req.body._id).exec()
})
//set up static
app.use(express.static(__dirname+"/views"))
app.listen(3000, function(){
    console.log("Connected on Port 3000")
});

app.get('/getData',function(req,res){
    Food.find({}).then(function(empl){
        res.json({Empl})
    })

})
