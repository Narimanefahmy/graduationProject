const hotelModel = require('../database_seeds/models/hotels');

var mostPopular = []
var hotelData = {}

class hotel {
    async getMostPopular() {
        try {
            mostPopular = await hotelModel.aggregate([{ $match: { reviewsnum: { $gt: 500 } } }, {
                $group: {
                    _id: '$name',
                    city: { $first: '$city' },
                    name: { $first: '$name' },
                    reviewsnum: { $first: '$reviewsnum' },
                    price: { $first: '$price' },
                    images: { $first: '$images' },
                    starnum: { $first: '$starnum'}
                }
            }, {
                $sort: {
                    'reviewsnum': -1
                }
            }, {
                $limit: 10
            }, {
                $project: {
                    _id: 0,
                    name: 1,
                    city: 1,
                    reviewsnum: 1,
                    price: 1,
                    images: 1,
                    starnum: 1
                }
            }])
        } catch {
            return 'error ocurred'
        }
        return mostPopular
    }

    async getBody(req,res,next){
        console.log('Got body:', req.body);
        const name  = req.body.name
        const city = req.body.city
        try{
            hotelData = await hotelModel.find({ $and: [ { name: name }, { city: city } ]}).lean()
            //console.log(hotelData)
            return hotelData
        }
        catch{
            return 'error ocurred'
        }
    }
    async getReview(req,res,next){
        console.log('Got body:', req.body);
        const name  = req.body.name
        const city = req.body.city
        const review = req.body.review
        try{
            console.log(typeof review)
            var reviewHotel= JSON.stringify(review).replace(/"/g, `'`).replace(/,/g,`, `).replace(/:/g,`: `)
            console.log(reviewHotel)
            hotelData = await hotelModel.find({ $and: [ { name: name }, { city: city } ]}).lean()
            var editedReviewText = (hotelData[0].hotelreviews).slice(0, -1)
            var editedReview = editedReviewText + ", " + reviewHotel + "]"
            console.log(editedReview)
            hotelData = await hotelModel.updateOne({ $and: [ { name: name }, { city: city } ]},{$set: {"hotelreviews": editedReview}}).lean()
        }
        catch{
            return 'error ocurred'
        }
    }
    async returnedValue(){
        var array = await hotelData
        return array
    }
}

module.exports = new hotel