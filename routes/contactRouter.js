const express = require('express');
const contactRouter = express.Router();

contactRouter.get('/', function(req, res, next){
    res.render('contact');
})
module.exports = contactRouter;