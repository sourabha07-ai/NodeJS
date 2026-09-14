import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URl = process.env.MONGODB_URL;

//! MongoDB Connection Setup
(async () => {
        const connectionInstance = await mongoose.connect(MONGO_URl)
                .then(() => { console.log("MongoDB Connected"); })
                .catch((error) => { console.log("MongoDB Connection Error:", error); });
})()

//!data defination
const userSchema = mongoose.Schema({
        name: String,
        age: Number,
        City: String
});

//!Create User_Collection
const userCollection = mongoose.model('user', userSchema)

//!josn formting
const server = express();
server.use(express.json());

//!Post Operation(Create API)
server.post('/createUser', async (req, res) => {
        console.log("Create new User");
        const userData = req.body;

        //! Create Multiple Document
        const createUser = await userCollection.create(userData);
        res.send({
                "createdUser": createUser
        });
        console.log(createUser);

});

//!Find All User
server.get('/getAllUser',async (req,res)=>{
        const users = await userCollection.find();
        console.log(`Get all User ${users}`);
        res.send(users);
});

//!find single User
server.get('/getSingleUser',async (req,res)=>{
        const user = await userCollection.findOne({
                name:req.body.name
        });
        res.send(user);
        console.log(user);
}) 








//!Server Listen Operation 
server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
});