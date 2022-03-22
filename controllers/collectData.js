const place = require("./places")
const restaurant = require("./restaurants")
const hotel = require("./hotels")
const attraction = require('./attractions')

function parseArray(array) {
    array = [...array.map((obj) => {
        obj.images = JSON.parse(obj.images.replaceAll(`'`, `"`))
        return obj;
    })];
}

function modifyStarnum(array){
    array = [...array.map((obj) => {
        obj.starnum = parseFloat(obj.starnum)
        return obj;
    })];
}

function modifycuisines(array){
    array = [...array.map((obj) => {
        if(obj.cuisines == "None"){
            obj.cuisines = ""
        }
        return obj;
    })];
}

async function collectData(req, res, next) {
    console.log("start")
    console.log("places")
    var placeData = await place.homePlaces()
    parseArray(placeData)
    console.log("restaurants")
    var restaurantData = await restaurant.getMostPopular()
    parseArray(restaurantData)
    modifycuisines(restaurantData)
    console.log("hotels")
    var hotelData = await hotel.getMostPopular()
    parseArray(hotelData)
    modifyStarnum(hotelData)
    console.log("attractions")
    var attractionData = await attraction.getMostPopular()
    parseArray(attractionData)
    res.json({ placeData, restaurantData, attractionData, hotelData })
    next()
}


module.exports = { collectData }