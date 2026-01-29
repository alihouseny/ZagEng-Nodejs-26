let ages = [];
for (let i = 0; i < 5; i++) {
  ages.push(Number(prompt("Enter an age:")));
}
ages.forEach(age => {
  if (age >= 18) {
    console.log(age);
  }
});