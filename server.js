
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Review = require('./reviewModel.js');
const path = require('path');


const app = express();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(process.env.PORT || 5000))
.catch((err) => console.log(err))


app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.get('/api/reviews', async (req, res) => {
    
    try {
        const reviews = await Review.find(req.body.review)
    
         res.json(reviews)
         console.log(reviews)
         
} catch (err) {
        res.status(500).json({ message: err.message})
        } 
})

app.post('/api/reviews', (req, res) => {

    const { title, name, rating, body, date } = req.body;
    
    const newReview = new Review(req.body)

    newReview.save()
    .then((result) => {
       console.log(result)
    }).catch((err) => console.log(err))
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
