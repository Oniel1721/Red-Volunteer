const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const formidable = require('express-formidable')
const app = express()
require('./database')

let typeUser =[
    {"name":"Donor"},
    {"name":"Recipient"}
]

let bloodType = [
    {"name":"A+"},
    {"name":"B+"},
    {"name":"AB+"},
    {"name":"A-"},
    {"name":"B-"},
    {"name":"AB-"},
    {"name":"O+"},
    {"name":"O-"},
]

// Settings
app.set('port', process.env.PORT || 7000)

// Middlewares
// app.use((req, res)=>{
//     res.send({
//         message: "No Found error 404"
//     })
// })
app.use(morgan('dev'))
app.use(cors())
app.use(formidable())

app.use('/api' , require('./routes/router'))


//Static Files
app.use(express.static(path.join(__dirname, '../dist')))

// Starting Server
app.listen(app.get('port'), (req, res)=> {
    console.log(`server on port ${app.get('port')}`);
})