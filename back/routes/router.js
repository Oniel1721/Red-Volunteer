const express = require('express')
const url = require('url')
const formidable = require('express-formidable')
const router = express.Router()
const DataBase = require('../database.js')
// const sequelize = require('./database')
const TypeUser = require('../models/TypeUser')
const User = require('../models/User')
const BloodType = require('../models/BloodType')

router.get('/', (req, res)=> {
    res.json(DataBase.openDB(true))
});

// router.get('/users', (req, res)=>{
//     res.json(DataBase.openDB(1))
// })

router.get('/user/:id', (req, res)=>{
    console.log("peticion post id")
    User.findByPk(req.params.id).then(user=>{
        res.json(user)
    })
})

router.delete('/user/:id',(req,res)=>{
    User.destroy({where:{id:req.params.id}}).then(result=>{
        res.json(result)
    })
})

// SIGNUP
// router.post('/signup', (req, res)=>{
//     DataBase.addNewUser(req.fields, (err, msg, user)=>{
//         if(err){
//             res.json({
//                 "error": err,
//                 "message": msg,
//                 "OK": false,
//                 "user": null
//             })
//         }
//         else {
//             res.json({
//                 "error": err,
//                 "message": msg,
//                 "OK": true,
//                 "user": user
//             })
//         }
//         console.log(msg)
//     })
// })

router.post('/signup', (req, res)=>{
    User.create({
        name:req.fields.name,
        email:req.fields.email,
        password:req.fields.password,
        typeUserId:req.fields.blood,
        bloodtypeId:req.fields.user,
        graphDomain:"local"
    })
    .then(user=>{
        let {userId, name, email, typeUserId, bloodtypeId} = user.dataValues,
        answer = {
            userId,
            name,
            email,
            bloodType: bloodtypeId,
            userType: typeUserId,
            OK: true,
            msg: "User registred"
        }
        res.json(answer);
    })
    .catch(err=>{
        console.log(err)
        let answer = {
            OK: false,
            msg: "There was an error."
        }
        res.json(answer);
    })
})

router.post('/social', (req, res)=>{
    console.log(req.fields)
    User.create({
        name:req.fields.name,
        email:req.fields.email,
        graphDomain:req.fields.graphDomain,
        userIdDomain:req.fields.userID,
        typeUserId:req.fields.blood,
        bloodtypeId:req.fields.user
        
    }).then(user=>{
        res.json(user);
    }).catch(err=>{
        console.log(err)
    })
    // console.log(req)
})


router.get('/users', (req,res)=>{
    User.findAll({include:['bloodtype','typeUser']}).then(users=>{
        res.json(users)
    })
})

// LOGIN
router.post('/login', (req, res)=>{
    User.findOne({where:{email:req.fields.email}}).then(user=>{
        console.log(user)
        res.json({
            ...user,
            OK: true
        })
    })
})

module.exports = router;
