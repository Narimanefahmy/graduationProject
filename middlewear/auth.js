const jwt = require('jsonwebtoken');
const KEY = require('../env_variables/env_vars.json').KEY;

class Authentication{
 auth = (req, res, next) => {
    var tokenHeader = req.headers.authorization.split(' ')[1];
    if (typeof(tokenHeader) !== 'undefined'){
        try { 
            token = jwt.verify(tokenHeader, KEY);
            req.userId = token.user._id;
            req.userType = token.user.type;
            next();
        } catch (err) {
            return res.sendStatus(403).json({
                message: 'Unauthorized  access'
            })
        }
    } else {
        return res.sendStatus(403).json({
            message: 'Unauthorized access'
        })
    }
}}
module.exports = new Authentication;
