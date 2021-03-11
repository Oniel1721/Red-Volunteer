const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res)=> {
    res.json(DataBase.openDB(true))
});

router.get('/user/:id', async (req, res)=>{
    await User.findById(req.params.id)
        .then(user=>{
            res.json(user)
        })
})

router.delete('/user/:id',  (req, res)=>{
    User.findByIdAndDelete(req.params.id)
    res.send({
        message: "User deleted"
    })

})

router.post('/social', async (req, res)=>{

    const newUser = new User({
        name:req.field.name,
        email:req.field.email,
        graphDomain:req.field.graphDomain,
        userIdDomain:req.field.userID,
        typeUserId:req.field.blood,
        bloodtypeId:req.field.user
    })
    await newUser.save()
    .then(user =>{
        res.json(user);
    })
    .catch(err =>{
        console.log(err.message)
    })
})

router.get('/users', (req, res)=>{
    User.find()
        .then(users=>{
            res.json(users)
        })
})

// LOGIN
// router.post('/login', (req, res)=>{
//     User.findOne({email:req.body.email})
//     .then(user=>{
//         res.json({
//             ...user,
//             OK: true
//         })
//     })
// })

module.exports = router;
