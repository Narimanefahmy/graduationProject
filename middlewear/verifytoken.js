const jwt = require('jsonwebtoken');
const KEY = require('../env_variables/env_vars.json').KEY;

class verifytoken{
    verifyToken = (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];
        //const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            req.email = decoded.email;
            next();
        })
    }
}
module.exports = new verifytoken;
