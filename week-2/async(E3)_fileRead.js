const fs = require("fs");

function printContent(err,data){
    if(err){
        console.log("Error:File not found!");
    }
    else{
        console.log(data);
    }
}

fs.readFile("a.txt","utf-8",printContent);
fs.readFile("b.txt","utf-8",printContent);
fs.readFile("c.txt","utf-8",printContent);


console.log("DONE!");


// done is executed first then all the async tasks are called in stack first they were in callback queue.File b has the least content so it outputs the first in async tasks after the done executed as done it a cpu intensive task