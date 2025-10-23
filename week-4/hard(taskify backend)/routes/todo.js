const { Router } = require("express");
const express = require('express');
const adminMiddleware = require("../middleware/user.js");
const {Todo} = require('../database/index.js');
const mongoose = require("mongoose");
const router = Router();

// todo Routes
router.use(express.json());

router.post('/create', async(req, res) => {
    // Implement todo creation logic
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.body.userId;

    try {
        await Todo.insertMany({
            title: title,
            done: done,
            userId: userId
        })
        res.json({
            message:"Todo inserted successfully"
        })
    } catch (error) {
        res.json({
            message:`Error while inserting todo: ${error}`
        })
    }
});

router.put('/update', adminMiddleware, async(req, res) => {
    // Implement update todo  logic
    const newTitle = req.body.newTitle;
    const newdoneStatus = req.body.newdoneStatus;

    const todoUpdate = await Todo.updateOne({userId: req.userId},
    {   title: newTitle,
        done:newdoneStatus
    })

    if(todoUpdate.matchedCount){
        res.json({
            message:"Todo updated Successfully!"
        })
    }
    else{
        res.json({
            message:"No such TODO found in our DB!"
        })
    }

});

router.delete('/delete', adminMiddleware, async(req, res) => {
    // Implement delete todo logic
    await Todo.delete()
});

router.delete('/:id', adminMiddleware, async(req, res) => {
    // Implement delete todo by id logic
    const id = req.params.id;
    console.log(id,typeof(id))
    const delRec = await Todo.deleteOne({
        _id : id
    })
    
    if(delRec.deletedCount){
        res.json({
            message:"Todo deleted!!!"
        })
    }
    else{
        res.json({
            message:"Todo does not exist OR already deleted!!"
        })
    }

    console.log(delRec)

    
});


router.get('/todos', async(req, res) => {
    // Implement fetching all todo logic
    const results = await Todo.find({})// empty means get me all.

    res.json({
        results
    })
});

router.get('/:id', async(req, res) => {
    // Implement fetching todo by id logic
    const id = req.params.id;

    const todo = await Todo.findOne({
        _id : id
    })

    if(todo){
        res.json({
            todo
        })
    }
    else{
        res.json({
            message:"No such todo found!"
        })
    }

    
});

module.exports = router;