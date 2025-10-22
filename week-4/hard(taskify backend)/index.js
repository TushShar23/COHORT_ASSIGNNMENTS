const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user") 
const todoRoutes = require("./routes/todo")
const mongoose = require("mongoose")

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

// app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/todo",todoRoutes)


async function main(){
    await mongoose.connect(`${process.env.MONGO_URL}/${process.env._DB}`) // Here i have used environment variables.
    app.listen(port,()=>{
        console.log("Server Started")
    })

}

main()

