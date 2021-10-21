const mongoose = require('mongoose')
const Schema = mongoose.Schema


const reviewSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    date: {

        type: String,
        required: true
    }
})

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;