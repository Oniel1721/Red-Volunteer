const express = require('express')
const url = require('url')
const formidable = require('express-formidable')
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
    console.log("fields",req.fields);
    DataBase.addNewUser(req.fields, (err, msg, user)=>{
        if(err){
            res.json({
                "error": err,
                "message": msg,
                "OK": false,
                "user": null
            })
        }
        else {
            res.json({
                "error": err,
                "message": msg,
                "OK": true,
                "user": user
            })
        }
        console.log(msg)
    })
})

// LOGIN

router.post('/login', (req, res)=>{
    console.log("llego post de login")

    DataBase.loginUser(req.fields, (err, msg)=>{
        if(err){
            // res.json({msg, success: false})
            res.redirect('/login-local')
        }
        else{
            res.redirect('/')
            // res.json(DataBase.openDB(true))
        }
        console.log(msg)
    })
})

module.exports = router
