let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Number(prompt("Enter a number:")));
}
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);