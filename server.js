const express = require('express')

const route = require('./config/route')
require('./config/mongoose')

const app = express()
app.set('view engine' , 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(route)


app.listen(5000, console.log('Server is on 5000'))