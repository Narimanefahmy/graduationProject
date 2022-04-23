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
  
  parseArray(array) {

    array = [...array.map((obj) => {
      obj.images = JSON.parse(obj.images.replace(/'/g, `"`))
        return obj;
    })];

}

   search = async(req, res, next) => {
    try {
      const search_field  = req.body.search;
     
        HotelsArray = await hotelsModel.find({name :{$regex: search_field, $options: "i"}} ,"city name images ").exec()
         HotelsArray = [...HotelsArray.map(({name,images,city})=> {
            return {name,images,city};

          })];  
          this.parseArray(HotelsArray)
          
        attractionsArray = await attractionsModel.find({name :{$regex: search_field, $options: "i"}} ,"city name images").exec();
         attractionsArray = [...attractionsArray.map(({name,images,city})=> {
            return {name,images,city};

          })];  
          this.parseArray(attractionsArray) 

          placesArray=await placesModel.find({name :{$regex: search_field, $options: "i"}} ," name type images").exec();
          placesArray = [...placesArray.map(({name,images,type})=> {
             return {name,images,type};
 
           })]; 
          this.parseArray(placesArray) 

           restaurantsArray=await restaurantsModel.find({city :{$regex: search_field, $options: "i"}} ," name city images").exec();
           restaurantsArray = [...restaurantsArray.map(({name,images,city})=> {
              return {name,images,city}})];
          this.parseArray(restaurantsArray) 
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
