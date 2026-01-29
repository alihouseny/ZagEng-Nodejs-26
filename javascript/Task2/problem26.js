let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Number(prompt("Enter a number:")));
}
let count = numbers.filter(num => num > 10).length;
console.log(count);