let x =[]
for (let i=0;i<5;i++){
    let y=Number(prompt("Enter 5 numbers"+(i+1)));
    x.push(y);
}

console.log(x);
console.log(x.length);
console.log(x[0]);
console.log(x[x.length - 1]);