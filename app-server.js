//THIS IS JUST APP.JS AS YOU KNOW IT

const express = require('express')
const app = express()
const blogRoutes = require('./routes/blogRoutes')

app.use(express.json())
app.use(express.static('public')) // serving everything in the public folder statically ie the styles
app.use(express.urlencoded({extended:true}))

app.use('/api/blogs',blogRoutes) // /api is here because the frontend is gonna use the first param for routing in the front view 
                                //(this is specified in server.js with the *)


module.exports = app