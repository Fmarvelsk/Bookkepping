const jwt = require('jsonwebtoken');
require('dotenv/config')

module.exports = (req, res, next) => {
    const query = req.header('auth-token');
    if(!query) 
        return res.status(400).send('Access Denied')
    try {
        const verify = jwt.verify(query, process.env.JWT)
        req.user = verify;
        next()
    }
    catch {
        res.status(400).send('Token is invalid')
    }

}