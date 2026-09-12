 const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Rahul",
        age: 21
    },
    {
        id: 2,
        name: "Priya",
        age: 22
    }
];

// CREATE
app.post("/students", (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);

    res.status(201).json(student);
});

// READ ALL
app.get("/students", (req, res) => {
    res.json(students);
});

// READ ONE
app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// UPDATE
app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json(student);
});

// DELETE
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(student => student.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});