const passport = require('passport');
const User = require('../models/schemas')


const passportUser = (app) => {
    app.use(passport.initialize())
    app.use(passport.session())

        passport.serializeUser(function(user, done){
            done(null, user.id);
        })
        
        passport.deserializeUser(function(id, done){
            User.findById(id, function(err, user){
             done(err, user);
            })
        })
require('./Strategic')

}

module.exports = passportUser;