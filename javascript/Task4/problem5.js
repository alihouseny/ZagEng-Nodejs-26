function getAdultNames(people) {
return people
.filter(person => person.age >= 18)
.map(person => person.name);
}
const people = [
{ name: "Ahmed", age: 23 },
{ name: "Sara", age: 16 },
{ name: "Mona", age: 19 }
];
console.log(getAdultNames(people));