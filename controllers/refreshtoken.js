const mongoose = require('mongoose');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');

const userModel = require('../database_seeds/models/user');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const KEY = require('../env_variables/env_vars.json').KEY;
class refreshtoken {
      refreshToken = async(req, res) => {
        try {
            const refreshToken = req.cookies.refreshToken;
            if(!refreshToken) return res.sendStatus(401);
            const user = await userModel.findAll({
                where:{
                    refresh_token: refreshToken
                }
            });
            if(!user[0]) return res.sendStatus(403);
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
                if(err) return res.sendStatus(403);
                const userId = user[0].id;
                const name = user[0].name;
                const email = user[0].email;
                const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                    expiresIn: '15s'
                });
                res.json({ accessToken });
            });
        } catch (error) {
            console.log(error);
        }
    }

}
module.exports= new refreshtoken;