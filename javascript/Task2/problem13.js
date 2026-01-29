let decimals = [];
for (let i = 0; i < 4; i++) {
  decimals.push(Number(prompt("Enter a decimal number:")));
}
decimals.forEach(num => {
  let rounded = Math.round(num);
  console.log(rounded >= 8 ? "Pass" : "Fail");
});