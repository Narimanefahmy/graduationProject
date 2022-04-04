const express = require('express');//call the express library
const app = express();//make instance from express
const bodyParser = require('body-parser');
const cors = require('cors')
const signup = require('./controllers/signup');//import signup
const signin = require('./controllers/signin'); 
const search = require('./controllers/search'); 
const Logout = require('./controllers/logout'); 
const getUser = require('./controllers/getUser'); 
const refreshtoken = require('./controllers/refreshtoken'); 
const verifytoken = require('./middlewear/verifytoken')
const { collectData } = require('./controllers/collectData');
//var cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(cookieParser())
app.use(cors())

app.get('/users',verifytoken.verifyToken,getUser.getUsers)//get all users
app.post('/signup', signup.signup)//done
app.post('/signin', signin.signin)//done
app.post('/search',search.search)
//app.get('/search',search.search)
app.get('/backend', collectData)
//app.get('/token',refreshtoken.refreshToken)
app.delete('/logout',Logout.Logout)
/*
var fetchOptions = {
    method: "POST",
    header: new Headers({
        "Content-Type": "signin/json",
    }),
    //cross origin mode is needed as we are not using the same domain
    mode: "cors"
}
*/

app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})