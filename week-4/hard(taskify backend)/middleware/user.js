const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const {User} = require('../Database/Db.js')
const mongoose = require('mongoose')

dotenv.config();

async function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decToken = jwt.verify(token,process.env.JWT_SECRET);

    const user = await User.findOne({
        _id: decToken.id
    })

    if(user){
        // we have populated the req object with the property userId
        req.userId = decToken.id;
        next()
    }
    else{
        res.json({
            message:"Invalid credentials!"
        })
    }
}