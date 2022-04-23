const place = require("./places")
const restaurant = require("./restaurants")
const hotel = require("./hotels")
const attraction = require('./attractions');
const hotels = require("./hotels");
const { json } = require("express/lib/response");

function parseArray(array) {

    array = [...array.map((obj) => {
        obj.images = JSON.parse(obj.images.replace(/'/g, `"`))
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


function parseHotel(array) {
    console.log("//////////////////////")
    if(array.length == 0){
        return array
    }
    try{
        array.map((obj) => {
            if(obj.images != "None"){
                obj.images = JSON.parse(obj.images.replace(/'/g, `"`))
                if((obj.images).length > 1 ){
                    obj.images = [...new Set(obj.images)];
                }
            }
            console.log("1")
            if(obj.Propertyamenities != "None"){
                obj.Propertyamenities = obj.Propertyamenities.replace(/'s/g, ` `)
                obj.Propertyamenities = obj.Propertyamenities.replace(/s' /g, `s`)
            obj.Propertyamenities = JSON.parse(obj.Propertyamenities.replace(/'/g, `"`))
            }
            console.log("2")
            if(obj.roomfeatures != "None"){
                obj.roomfeatures = obj.roomfeatures.replace(/'s/g, ` `)
                obj.roomfeatures = obj.roomfeatures.replace(/s' /g, `s`)
                obj.roomfeatures = JSON.parse(obj.roomfeatures.replace(/'/g, `"`))
            }
            console.log("3")
            if(obj.roomtypes != "None"){
                obj.roomtypes = obj.roomtypes.replace(/'s/g, ` `)
                obj.roomtypes = obj.roomtypes.replace(/s' /g, `s`)
                obj.roomtypes = JSON.parse(obj.roomtypes.replace(/'/g, `"`))
            }
            console.log("4")
            if(obj.hotelstyle != "None"){
                obj.hotelstyle = obj.hotelstyle.replace(/'s/g, ` `)
                obj.hotelstyle = obj.hotelstyle.replace(/s' /g, `s`)
                obj.hotelstyle = JSON.parse(obj.hotelstyle.replace(/'/g, `"`))
            } 
            console.log("5")
            if(obj.starnum != "None"){
                obj.starnum = parseFloat(obj.starnum)
            }
            console.log("6")
            if(obj.hotelreviews != "None"){
                var found = [],          // an array to collect the strings that are found
                rxp = /{([^}]+)}/g,
                str = obj.hotelreviews,
                curMatch;
                console.log("7")
                while( curMatch = rxp.exec( str ) ) {
                    // get profilename
                    var firstvariable = "'profilename': '";
                    var secondvariable = "', 'date':"
                    var profile_name = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                    console.log("8")
                    // get date 'date': '
                    firstvariable = "'date': ' ";
                    secondvariable = "', 'rate':"
                    var date = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                    console.log("9")
                    // get rate  'rate': '
                    firstvariable = "'rate': '";
                    secondvariable = "', 'title':"
                    var rate = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                    console.log("10")
                    // get title 'title': '
                    firstvariable = "'title': '";
                    secondvariable = "', 'review':"
                    var title = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                    console.log(title);
                    console.log("11")
                    if(title == null){
                        firstvariable = "'title': "+'"';
                        secondvariable = '"'+", 'review':"
                        title = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                        console.log(title);
                        console.log("12")
                    }
                    console.log("13")
                    // get review 
                    firstvariable = "'review': '";
                    secondvariable = "', 'dateofsaty':";
                    var review = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                    if(review == null){
                        firstvariable = "'review': "+'"';
                        secondvariable = '"'+", 'dateofsaty':";
                        review = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                    }
                    // get date of stay 'dateofsaty': '
                    firstvariable = "'dateofsaty': '";
                    secondvariable = "'";
                    var date_of_stay = curMatch[1].match(new RegExp(firstvariable + "(.*)" + secondvariable));
                    var reviews = {
                        profileName: profile_name[1],
                        date: date[1],
                        rate: rate[1],
                        title: title[1],
                        review: review[1],
                        dateOfStay: date_of_stay[1]
                    }
                    found.push( reviews );
                }
                console.log(found);
                console.log(found.length);
                obj.hotelreviews = found
            }
            return obj;
    });}
    catch{
        console.log("map error");
        //console.log(array);
    }
}

async function hotelData(req,res,next){
    var hotelPostedData = await hotels.returnedValue()
    parseHotel(hotelPostedData)
   // modifyStarnum(hotelPostedData)
    //console.log(hotelPostedData)
    res.json(hotelPostedData)
}


module.exports = { collectData, hotelData }