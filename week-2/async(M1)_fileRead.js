const fs = require('fs');
// const { resolve } = require('path');

let content= ""
const newData= []
let newStr = ""

const operation = new Promise((resolve,reject)=>{
    fs.readFile('Fileread.txt',"utf-8",(err,data)=>{
    if(err){
        reject(err);
    }
    else{
        const str = String(data);
        // console.log(str.length);
        for(let i=0;i<str.length;i++){
            if(str[i]!==" "){
                newData.push(str[i])
                // console.log(str);
                // console.log(newData);
            }

            else if(str[i]===" "){
                let code = str.charCodeAt(i-1);// we need to use this function so that it gives the character code not the character.This is not c++.str[i] gives you the character not code
                if((code>=65 && code<=90) || (code>=97 && code<=122)){
                    newData.push(" ");
                }
            }
        }

        newStr = newData.join("")
        resolve(newStr);
    }


    // console.log(newStr);

})

})

operation
.then((newstring)=>{
    fs.writeFile("Fileread.txt",newstring,(err)=>{
        if(err){
            console.log("Error Occured")
        }
        else{
            console.log("Written Successfully!")
        }
    })
})
.catch((err)=>{
    console.log(err);
})


