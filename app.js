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
const verifytoken = require('./middlewear/verifytoken');
const { collectData, hotelData } = require('./controllers/collectData')
const hotel = require("./controllers/hotels");
var cookieParser = require('cookie-parser');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())


app.get('/users',verifytoken.verifyToken,getUser.getUsers)//get all users
app.post('/signup', signup.signup)//done
app.post('/signin', signin.signin)//done
app.post('/search',search.search)
app.get('/backend', collectData)
app.post('/backend/hotels', hotel.getBody)
app.get('/backend/hotels', hotelData)
//app.get('/token',refreshtoken.refreshToken)
app.delete('/logout',Logout.Logout)

app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})

