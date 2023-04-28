// imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 5000

// static files

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

// set templating Engine
app.use(expressLayouts)
// app.set('layout', '/layouts/full-width')
app.set('view engine', 'ejs')

// Navigation
app.get('/index', (req, res) =>{
    res.render('index', {title: 'Home page'})
})
app.get('/about', (req, res) =>{
    res.render('about', {title: 'about page', layouts: 'layouts/sidebar'})
}) 

app.listen(port, ()=> console.info(`App listening on port ${port}`))