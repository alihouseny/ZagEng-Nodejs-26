const express = require("express");
const app = express();
const PORT = 3003;

app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

let students = [
  { id: 1, name: "Tahany", age: 21, department: "Computer Science" },
  { id: 2, name: "Ali", age: 19, department: "Mathematics" },
  { id: 3, name: "Sara", age: 22, department: "Computer Science" },
];

let nextId = 4;


app.post("/students", (req, res) => {
  const { name, age, department } = req.body;


  if (!name || !department || age === undefined) {
    return res.status(400).json({ error: "Validation failed" });
  }
  if (age <= 15) {
    return res.status(400).json({ error: "Validation failed" });
  }

  const newStudent = { id: nextId++, name, age, department };
  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully",
    student: newStudent,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
