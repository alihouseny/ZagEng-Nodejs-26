let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Number(prompt("Enter a number:")));
}
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));