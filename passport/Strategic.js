const passport = require('passport');
const User = require('../models/schemas')
const { LocalStrategy } = require('passport-local')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = function localStrategic(){
    passport.use(new LocalStrategy(
        (username, password, done) => {
          User.findOne({ username: username }, (err, user) => {
            if (err) { 
              return done(err);
             }
            if (!user) { 
              return done(null, false);
             }
            
            bcrypt.compare( password, user.password).then(valid =>{
            if(!valid){
              console.log('wrong password')
              return done(null, false)
            }}).catch( err => console.log('cannot compare passowrd', err))

            const token = jwt.sign({
              id : user_.id
            }, process.env.JWT)
            console.log(token)
            return done(null, user, token);
          });
        }
      ))}
