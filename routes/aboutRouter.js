const express = require('express');
const aboutRouter = express.Router();
aboutRouter.get('/', function(req, res, next){
    res.render('about');
})


module.exports = aboutRouter;