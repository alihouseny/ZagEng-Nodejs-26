let names = [];
for (let i = 0; i < 3; i++) {
  names.push(prompt("Enter a name:"));
}
names.forEach(name => console.log(name));