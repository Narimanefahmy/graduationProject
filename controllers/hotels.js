const hotelModel = require('../database_seeds/models/hotels');

var mostPopular = []

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

}

module.exports = new hotel