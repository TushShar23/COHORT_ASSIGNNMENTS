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
    // Implement update todo logic
    const userID = req.userId; // already populated in req object
    const title = req.body.title;
    const done = req.body.done;
    const TodoId = req.body.TodoId;

    console.log(TodoId)

    const todoUpdate = await Todo.findByIdAndUpdate(
    {      
        _id: TodoId,
        userId: userID

    },
    {   title: title,
        done: done 
    })
    console.log(req.userId)
    console.log(todoUpdate)

    if(todoUpdate){
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
    // specified parameter and variable in which we are catching should be same.
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

    // console.log(delRec)

    
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
    // specified parameter and variable in which we are catching should be same.

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