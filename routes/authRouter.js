const express = require('express');
const authRouter = express.Router();
const User = require('../models/schemas')
const passport = require('passport');

authRouter.post('/login', passport.authenticate('login', {failureRedirect:'/login'}), function(req, res, next){
    req.login(req.body, function(){
        res.redirect('/auth/profile')
        console.log(req.body)
    })
    
})
authRouter.get('/auth/profile', function(req, res, next){
    res.json(req.user)
})

authRouter.get('/', (req, res, next) => {
    res.render('login')
})

authRouter.post('/signup', (req, res, next) => {
   if(req.body.firstName&& req.body.lastName && req.body.email){
    const user = {
        firstName :req.body.firstName,
    lastName : req.body.lastName,
    emailaddress: req.body.emailName,
    userName : req.body.userName,
    password : req.body.password
    }
    User.create(user, (err, user) => {
        if(err){
            return next(err)
        }
        else{
         res.redirect('/auth/profile')
         return res.json(user)
        }
    }) }
    
    
})
module.exports = authRouter;