const express = require("express");
const app = express();
const PORT = 3000;

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


app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
