function parseArray(array) {
    array = [...array.map((obj) => {
      if(obj.images!=="None")
      {obj.images = JSON.parse(obj.images.replace(/'/g, `"`))}
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

module.exports = {parseArray,modifyStarnum,modifycuisines}