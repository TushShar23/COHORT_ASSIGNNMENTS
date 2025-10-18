const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();
// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URL}/${_DB}`) // Here i have used environment variables.
.then(()=>{
    console.log("DB Connected Successfully!")
})
.catch(err=>{
    console.error("Error occured while connecting to DB : ",err)
})

// Define schemas

const UserSchema = new mongoose.Schema({
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
    name: {type:String}
});

const TodoSchema = new mongoose.Schema({
    title: {type:String},
    done: {type:Boolean},
    userId: {type:mongoose.Schema.Types.ObjectId},
    id: {type:Number}
});

const User = mongoose.model('User', UserSchema,'User');
const Todo = mongoose.model('Todo', TodoSchema,'Todo');

module.exports = {
    User,
    Todo
}
