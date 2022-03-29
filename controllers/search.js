const mongoose = require('mongoose');
const hotelsModel = require("../database_seeds/models/hotels");
const placesModel = require("../database_seeds/models/places");
const restaurantsModel = require("../database_seeds/models/restaurant");
const attractionsModel = require("../database_seeds/models/attraction");

const url = require("../env_variables/env_vars.json").mongoosePort;

mongoose.connect(url)


var HotelsArray = []
var attractionsArray = []
var placesArray=[]
var restaurantsArray=[]
class Search{
   search = async(req, res, next) => {
    try {
      const search_field  = req.body.search;
     
        HotelsArray = await hotelsModel.find({name :{$regex: search_field, $options: "i"}} ,"city name").exec();
         HotelsArray = [...HotelsArray.map(({name,city})=> {
            return {name,city};

          })];  
        //console.log(HotelsArray);
        //res.json(HotelsArray);
        attractionsArray = await attractionsModel.find({name :{$regex: search_field, $options: "i"}} ,"city name").exec();
         attractionsArray = [...attractionsArray.map(({name,city})=> {
            return {name,city};

          })];  
          placesArray=await placesModel.find({name :{$regex: search_field, $options: "i"}} ," name type").exec();
          placesArray = [...placesArray.map(({name,type})=> {
             return {name,type};
 
           })];  
           restaurantsArray=await restaurantsModel.find({name :{$regex: search_field, $options: "i"}} ," name type").exec();
          restaurantsArray = [...restaurantsArray.map(({name,type})=> {
             return {name,type}})];
 
          res.json({
            attraction :attractionsArray,
             hotels: HotelsArray,
            places:placesArray,
            restaurant : restaurantsArray
        });
        next()
    } catch {
        next()
        return 'error ocurred'
    }
    
    return placesArray,HotelsArray,attractionsArray,restaurantsArray;

}
}
   module.exports = new Search;