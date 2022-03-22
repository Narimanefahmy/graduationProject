const restaurantModel = require('../database_seeds/models/restaurant');

var mostPopular = []
var different = []
class restaurant {
    async getMostPopular() {
        try {
            mostPopular = await restaurantModel.aggregate([{ $match: { reviewsnum: { $gt: 500 } } }, {
                $group: {
                    _id: '$name',
                    city: { $first: '$city' },
                    name: { $first: '$name' },
                    reviewsnum: { $first: '$reviewsnum' },
                    images: { $first: '$images' },
                    rate: {  $first: '$rate' },
                    cuisines: { $first: '$cuisines' }

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
                    images: 1,
                    cuisines: 1,
                    rate: 1
                }
            }])
        } catch {
            return 'error ocurred'
        }

        return mostPopular

    }
}

module.exports = new restaurant