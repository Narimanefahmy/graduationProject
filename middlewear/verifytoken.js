const jwt = require('jsonwebtoken');
const KeyAccess = require('../env_variables/env_vars.json').KeyAccess;

class verifytoken{
    verifyToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return res.json("Signin");
        jwt.verify(token, KeyAccess, (err, decoded) => {
            if(err) return res.json("Forbidden");
            req.email = decoded.email;
            next();
        })
    }
}
module.exports = new verifytoken;
