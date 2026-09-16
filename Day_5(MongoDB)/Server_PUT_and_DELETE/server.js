import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dns.setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config();

const server = express();
server.use(express.json());

const PORT = 4000;
const URL = process.env.MONGO_URL;

(async () => {
        await mongoose.connect(URL).then(() => {
                console.log("Connect✅");
        }).catch((err) => {
                console.log(`ERROR: ${err}`);
        });

})();

const structure_student_table = mongoose.Schema({
        name:String,
        age:Number,
        email:String,
        hobby:Object
});

const collect_student_data = mongoose.model('Student',structure_student_table);

server.post('/Create_new_student',async(req,res)=>{
        const studentData =req.body; 
         
        const UseStudentData = collect_student_data(studentData);
        await UseStudentData.save();
        res.send(UseStudentData);
});

server.put('/update_student_profile',async (req,res)=>{
        const updateStudentData = await collect_student_data.findByIdAndUpdate(req.query,req.body);
        console.log(updateStudentData);
        res.send({
                updateStudentData
        });
});

server.delete('/delete_student_profile',async (req,res)=>{
        const deleteStudeteData = await collect_student_data.findByIdAndDelete(req.query);
        res.send({
                "message":"Student data is Delete✅",
                deleteStudeteData
        });
})


server.get('/', async (req, res) => {
        await res.send('Hello Sourabha!✅');
        console.log("Connect✅");
});

server.get('/all_student_data', async (req, res) => {
        const get_teacher_data = await collect_student_data.find();
        console.log(get_teacher_data);
        res.send(get_teacher_data);
})


server.listen(PORT, () => {
        console.log(`Sever is running on http://localhost:${PORT}`);
})