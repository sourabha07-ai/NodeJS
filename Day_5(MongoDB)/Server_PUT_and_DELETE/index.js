import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dns from 'dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.MONGO_URL;


(async () => {
        await mongoose.connect(DB_URL).then(() => {
                console.log("DB connected ✅");
        }).catch((error) => {
                console.log("ERROR: ", error);
        })
})();

const teachers_Table_Format = mongoose.Schema({
        name: String,
        age: Number,
        qualification: String,
        address: String
});

const teacher_data_collecation = mongoose.model('Teacher', teachers_Table_Format);

const server = express();
server.use(express.json());

//Create a new Teacher
server.post('/create_new_teacher', async (req, res) => {
        const teacher_data = req.body;
        console.log(teacher_data);

        const Use_teacher_data = teacher_data_collecation(teacher_data);
        await Use_teacher_data.save();
        res.send({
                message: "Teacher created successfully",
                Teacher_data: Use_teacher_data
        })

});

// Update Teacher Profile 
server.put('/update_teacher_profile', async (req, res) => {
        const Update_teacher = await teacher_data_collecation.findByIdAndUpdate(req.query, req.body);
        res.send({
                Update_teacher
        })
});

//DELETE Teacher Profile
server.delete('/delete_teacher_profile',async(req,res)=>{
        const delete_teacher = await teacher_data_collecation.findByIdAndDelete(req.query);
        console.log(delete_teacher);
        res.send({
                delete_teacher
        });
        console.log("Delete Pofile");
})


//Get all teacher Data in browser
server.get('/all_teacher', async (req, res) => {
        const allTeacher = await teacher_data_collecation.find();
        console.log(`get all Teacher ${allTeacher}`);
        res.send(allTeacher);
});

server.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
});

