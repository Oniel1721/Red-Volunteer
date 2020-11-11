const express = require('express')
const url = require('url')
const router = express.Router()
const DataBase = require('../database.js')


router.get('/', (req, res)=> {
    res.json(DataBase.openDB(true))
})


router.get('/users/*', (req, res)=>{
    const url = req.path.split('/'),
        name = url[url.length-1]
    res.json(DataBase.openDB(name))
})

// SIGNUP
router.post('/signup', (req, res)=>{
    DataBase.addNewUser(req.body, (err, msg)=>{
        if(err){
            res.json({msg, success: false})
        }
        else{
            res.json(DataBase.openDB(true))
        }
        console.log(msg)
    })
})

// LOGIN

router.post('/login', (req, res)=>{
    DataBase.loginUser(req.body, (err, msg)=>{
        if(err){
            res.json({msg, success: false})
        }
        else{
            res.json(DataBase.openDB(true))
        }
        console.log(msg)
    })
})

module.exports = router