const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const formidable = require('express-formidable')
const app = express()
const sequelize = require('./database')
const TypeUser = require('./models/TypeUser')
const BloodType = require('./models/BloodType')
require('./associations')
// const User = require('./models/User')

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
app.use(morgan('dev'))
app.use(cors())
app.use(formidable())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api' , require('./routes/router'))

// app.get('/postman', (req, res)=>{
//     res.sendFile(path.join(__dirname, './routes/index.html'))
// })

//Static Files
app.use(express.static(path.join(__dirname, '../dist')))

// Starting Server
app.listen(app.get('port'), (req, res)=> {
    console.log(`server on port ${app.get('port')}`);
    sequelize.sync({force:true})
    .then(()=>{
        TypeUser.bulkCreate(typeUser,{validate:true})
        .then(()=>{
            console.log('TypeUser created')
        })
        .catch((err)=>{
            console.log("Failed to create TypeUser");
            console.log(err)
        })
        // .finally(()=>{
        //     sequelize.close();
        // });
        BloodType.bulkCreate(bloodType,{validate:true})
        .then(()=>{
            console.log("Bloodtype inserted.");
        })
        .catch((err)=>{
            console.log("Failed to insert BloodType");
            console.log(err)
        })
        // .finally(()=>{
        //     sequelize.close()
        // })
        console.log("--------------------");
    })
    .catch(error=>{
        console.log("error ocurrido",error);
    })
})