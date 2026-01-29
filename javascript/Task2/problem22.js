let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Number(prompt("Enter a number:")));
}
let doubled = numbers.map(num => num * 2);
console.log(doubled);