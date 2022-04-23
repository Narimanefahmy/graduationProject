const express = require('express');//call the express library
const app = express();//make instance from express
const bodyParser = require('body-parser');
const cors = require('cors')
const signup = require('./controllers/signup');//import signup
const signin = require('./controllers/signin'); 
const search = require('./controllers/search'); 
<<<<<<< Updated upstream
const auth = require('./middlewear/auth')
const { collectData } = require('./controllers/collectData')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/signup', signup.signup)
app.post('/signin', signin.signin)
app.get('/search',search.search)
app.get('/backend', collectData)
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
=======
const Logout = require('./controllers/logout'); 
const getUser = require('./controllers/getUser'); 
const refreshtoken = require('./controllers/refreshtoken'); 
const verifytoken = require('./middlewear/verifytoken')
const { collectData , hotelData } = require('./controllers/collectData');
var cookieParser = require('cookie-parser');
const hotel = require("./controllers/hotels")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get('/users',verifytoken.verifyToken,getUser.getUsers)//get all users
app.post('/signup', signup.signup)//done
app.post('/signin', signin.signin)//done
app.post('/search',search.search)
app.get('/backend', collectData)
app.post('/backend/hotels', hotel.getBody)
app.get('/backend/hotels', hotelData)
//app.get('/token',refreshtoken.refreshToken)
app.delete('/logout',Logout.Logout)

>>>>>>> Stashed changes

app.listen(8000, ()=>{
    console.log('Server running on port 8000')
})