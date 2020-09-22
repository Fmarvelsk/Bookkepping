const express = require('express');
const login = express.Router();
const model = require('../models/schemas')

login.get('/profile', function(req, res, next){
    res.json(req.user)
})
module.exports = authRouter;