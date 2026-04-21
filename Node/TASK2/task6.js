const express = require("express");
const app = express();
const PORT = 3005;

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


app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  students.splice(index, 1);

  res.status(200).json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
