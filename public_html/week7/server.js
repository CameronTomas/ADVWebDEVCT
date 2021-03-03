if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
var express = require('express')
var app = express()
var bcrypt = require('bcrypt')
var passport = require('passport')
var flash = require('express-flash')
var session = require('express-session')
var session = require('method-override')
var users = []

var initPassport = require('./passport-config')
initPassport(passport, function(email){
    return users.find( async function(users){users.email === email})
},
function(id){
    return users.find( async function(user){user.id === id})
})
var hbs = require('express-handlebars')
app.set('view engine', 'handlebars')
app.engine('handlebars', hbs({
    layoutsDir:__dirname+'/views/layouts'
    //extname:'hbs'
}))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOveride('_method'))


app.get('/', checkAuthenticated,function(req,res){
    res.render('main', {layout:'index', name:"Cameron"});
})
app.get('/register', function(req,res){
    res.render('register', {layout:'index'});
})
app.get('/login', function(req,res){
    res.render('login', {layout:'index'});
})
app.post('/register', async function(req,res){
    try{
        var hashedPassword = await bcrypt.hash(rrq.body.password, 10)

        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword
        })
        res.redirect('/login')
    }catch{
       res.redirect('/register')

    }
})
app.post('/login', passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login',
    failureFlash:true
}))
app.delete('/logout', function(req,res){
    req.logOut()
    res.redirect('/login')
})
function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}
function checkNotAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return redirect('/')
    }
    return next()
}
app.listen(3000)