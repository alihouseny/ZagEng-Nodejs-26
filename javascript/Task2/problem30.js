let values = [];
for (let i = 0; i < 5; i++) {
  values.push(prompt("Enter a value:"));
}
values.forEach(val => {
  if (typeof val === "string") {
    console.log(val);
  }
});