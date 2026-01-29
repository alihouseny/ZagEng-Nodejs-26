let x =[]
for (let i=0;i<5;i++){
    let y=Number(prompt("Enter 5 numbers"));
    x.push(y);
}

for (let i = 0; i < x.length; i++) {
  if (x[i] > 6) {
    console.log(x[i]);
  }
}