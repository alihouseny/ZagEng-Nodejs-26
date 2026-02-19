function addPassedProperty(students){
return students.map(student =>({
... student,
passed: student.score >= 50
}));
}
const students =[
{ name: "Ahmed", score: 80 },
{ name: "Sara", score: 40 }
];
console.log(addPassedProperty(students));