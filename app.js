const express = require('express');
const http = require('http-errors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const morgan = require('morgan')

const aboutRouter = require('./routes/aboutRouter')
const contactRouter = require('./routes/contactRouter')
const authRouter = require('./routes/authRouter')

const app = express();

mongoose.connect('mongodb://localhost:27017/User', {useNewUrlParser: true,useUnifiedTopology: true})
.then(function(){
    console.log('Connected to Database')
})
.catch(Error, function(err){
    console.log('Error connecting to database', err)
})

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'dataInfo', resave: true, saveUninitialized: true}))
require('./passport/passport')(app);

app.get('/', function(req, res, next){
    res.render('index')
})

app.use('/about', aboutRouter)
app.use('/contact', contactRouter) 
app.use('/login', authRouter)


app.use(function(req, res, next){
    res.status(404).render('404', {title : "ERROR"});
})
module.exports= app;