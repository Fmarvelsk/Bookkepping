const express = require('express');
const authRouter = express.Router();
const User = require('../models/schemas')
const passport = require('passport');
const verifyJWT = require('../tokenvalidator')
const bodyParser = require('body-parser') 
const bcrypt = require('bcrypt');

authRouter.use(bodyParser.json())

authRouter.post('/login', passport.authenticate('local', {failureRedirect:'/login'}), function(req, res, next){
    req.login(req.body, function(){
        res.redirect('/auth/profile')
        console.log(req.body)
    })
    
})

authRouter.get('/auth/profile', verifyJWT, (req, res, next) => {
    res.json(req.user)
})

authRouter.get('/signin', (req, res, next) => {
    res.render('login')
})

authRouter.post('/signup', (req, res, next) => {
    const {firstname, lastname, email, username, password} = req.body;
    const err = {}
   if(req.body === null || undefined){
       return res.status(404).send({response :'Invalid field', err })
   }
       User.findOne({email}).then(data => {
           if(data) {
               return res.status(404).send({ response : "user already exist"})
           }
           
           else{
            const user = new User({
                firstname,
                lastname,
                email,
                username,
                password
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hash) => {
                        if (err)
                        throw err
                        user.password = hash
                        user
                        .save()
                        .then( result => {
                            //confirmation mail of sigining up
                            /** loginEmail.sendConfirmationEmail(result)
                                    res.status(200).send({response: "Mail sent successfully"})})
                                 */
                                console.log(result)
                                res.redirect('/auth/profile')
                        }).catch( err => err)
            
                    })
                })

           }
       }).catch(err => err)
    

        
})

module.exports = authRouter; 