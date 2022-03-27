const mongoose = require('mongoose');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');

const userModel = require('../database_seeds/models/user');
const { refreshToken } = require('./refreshtoken');
const mongoosePort = require('../env_variables/env_vars.json').mongoosePort;
const KeyAccess= require('../env_variables/env_vars.json').KeyAccess;
const Keyrefresh= require('../env_variables/env_vars.json').Keyrefresh;

mongoose.connect(mongoosePort)

class Signin{
signin = (req, res) => {
    var enteredData = req.body;
    var pass_shasum = crypto.createHash('sha1').update(req.body.password).digest('hex');
    userModel.find({email: enteredData.email, password: pass_shasum})
    .then((docs) => {
        if (docs.length == 0){
                res.json("notFound!")
        } else {
            var user = docs[0];
            const accessToken=jwt.sign({user}, KeyAccess, {expiresIn: '2hr'})
            const refreshToken= jwt.sign({user}, Keyrefresh, {expiresIn: '1d' })
             userModel.findOneAndUpdate({email:enteredData.email},{refresh_token:refreshToken}, function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated Docs : ", docs);
                }});
             res.cookie('refreshToken',refreshToken,{
                 httpOnly:true,
                 maxAge: 24 * 60 * 60 * 1000
             });
             res.json({accessToken})
        }
    })}
}
module.exports= new Signin;