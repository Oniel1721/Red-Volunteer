const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const formidable = require('express-formidable')
const app = express()


// Settings
app.set('port', process.env.PORT || 7000)

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(formidable())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api' , require('./routes/router'))

app.get('/postman', (req, res)=>{
    res.sendFile(path.join(__dirname, './routes/index.html'))
})

//Static Files
app.use(express.static(path.join(__dirname, '../dist')))

// Starting Server
app.listen(app.get('port'), (req, res)=> {
    console.log(`server on port ${app.get('port')}`)
})