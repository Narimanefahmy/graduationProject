const jwt = require('jsonwebtoken');
const KeyAccess = require('../env_variables/env_vars.json').KeyAccess;

class verifytoken{
    verifyToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return res.sendStatus(401);
        jwt.verify(token, KeyAccess, (err, decoded) => {
            if(err) return res.sendStatus(403);
            req.email = decoded.email;
            next();
        })
    }
}
module.exports = new verifytoken;
