const express = require('express')
const routes = express.Router()

const funController =require('../controller/tweetController')




routes.get('/tweet', funController.getHomepage)
routes.get('/addtweet', funController.getAddNewPage)
routes.post('/submit-tweet', funController.submittweet)
routes.get('/tweet/:id', funController.getFullTweet)
routes.get('/delete-tweet/:id', funController.deletTweet)
routes.get('/tweet/edit/:id' , funController.editTweet)
routes.post('/tweet/:id' , funController.submiteditTweet)







module.exports= routes