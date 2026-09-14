import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import dns from 'dns';
import { connect } from 'http2';

dotenv.config();
dns.setServers(['1.1.1.1', '8.8.8.8']);
const PORT_2 = process.env.PORT_2;
const MONGODB2_URL = process.env.MONGODB2_URL;
const server2 = express();
server2.use(express.json());

(async () => {
        await mongoose.connect(MONGODB2_URL)
                .then(() => {
                        console.log("MONGODB CONNECTED ✅");
                })
                .catch((error) => {
                        console.log("ERROR: ", error);
                });
})();

const student_Table = mongoose.Schema({
        name: String,
        age: Number,
        email: String,
        City: String
});

const student_Data_Collection = mongoose.model('student', student_Table);


server2.post('/create_New_Student', async (req, res) => {
        const student_Data = req.body;
        const studentDataCollection = await student_Data_Collection.create(student_Data);
        res.send({
                "Student_DataCollection":studentDataCollection
        });
        console.log(studentDataCollection);
})



server2.get('/', (req, res) => {
        res.send("HOME PAGE CREATED ✅🏠");
});


server2.listen(PORT_2, () => {
        console.log(`Server is Running on http://localhost:${PORT_2}`);
})