const express = require("express");
const app = express();
const PORT = 3004;

app.use(express.json());

// Logger Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


let students = [
  { id: 1, name: "Tahany", age: 21, department: "Computer Science" },
  { id: 2, name: "Ali", age: 19, department: "Mathematics" },
  { id: 3, name: "Sara", age: 22, department: "Computer Science" },
];

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, age, department } = req.body;

  if (!name || !department || age === undefined) {
    return res.status(400).json({ error: "Validation failed" });
  }
  if (age <= 15) {
    return res.status(400).json({ error: "Validation failed" });
  }

  students[index] = { ...students[index], name, age, department };

  res.status(200).json({ message: "Student updated successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
