// writefile() is an async function which takes the file descriptor,content and a callback.IF file doesn't exist it creates first then do the write operation

const fs = require('fs');

const d1 = "Adding in d.txt Adding in d.txt Adding in d.txt Adding in d.txt Adding in d.txt Adding in d.txt"

const d2 = "Adding in e.txt Adding in e.txt Adding in e.txt Adding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txt Adding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txtAdding in e.txt"

const d3 = "f.txt"

const d4 = "Hello file d"

const ShowStatus = (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file d SUCCESS!")
    }
}
const ShowStatus2 = (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File e SUCCESS!")
    }
}
const ShowStatus3 = (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File f SUCCESS!")
    }
}


fs.writeFile("d.txt",d1,ShowStatus)
fs.writeFile("e.txt",d2,ShowStatus2)
fs.writeFile("f.txt",d3,ShowStatus3)
fs.writeFile("d.txt",d4,ShowStatus)

console.log("DONE!")