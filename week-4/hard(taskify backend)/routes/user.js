// const express = 
const { Router } = require("express");
const express = require("express")
const userMiddleware = require("../middleware/user");
const {User,Todo} = require('../database/index.js');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const router = Router();

dotenv.config()

router.use(express.json())
// User Routes
router.post('/signup', async(req, res) => {
    const { email, password , name } = req.body
    // fetching all in one line

    try {
        await User.insertOne({
            email: email,
            password: password,
            name: name
        })
        
        res.json({
            message:"Signed Up successfully!"
        })
        
    } catch (error) {
        res.json({
            message:`Error occured while inserting data: ${error}`
        })
    }
    


});

router.post('/login', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const userfound = await User.findOne({
        email: email
    })

    if(!userfound){
        res.json({
            message:"User does not exist in our DB"
        })
    }
    else{
        const token = jwt.sign({
            // id is a variable and _id is a property
            id: userfound._id.toString() // just signing a jwt
        },process.env.JWT_SECRET)
        res.json({
            token: token
        })
    }
});

router.get('/todos', userMiddleware, async(req, res) => {
    // Implement logic for getting todos for a user
    const results = await Todo.find({
        userId: req.userId
    })
    res.json({
        results
    })

});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = router