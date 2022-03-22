const attractionModel = require('../database_seeds/models/attraction');

var mostPopular = []

class attraction {
    async getMostPopular() {
        try {
            mostPopular = await attractionModel.aggregate([{ $match: { reviewsnum: { $gt: 500 } } }, {
                $group: {
                    _id: '$name',
                    city: { $first: '$city' },
                    name: { $first: '$name' },
                    reviewsnum: { $first: '$reviewsnum' },
                    images: { $first: '$images' },
                    typeofattraction: { $first: '$typeofattraction'},
                    rate: {  $first: '$rate' }
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
                    typeofattraction: 1,
                    rate: 1
                }
            }])
        } catch {
            return 'error ocurred'
        }
        return mostPopular
    }
}
module.exports = new attraction