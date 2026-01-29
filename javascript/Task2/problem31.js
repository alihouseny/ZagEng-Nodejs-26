function fibonacci(n) {
  let sequence = [];
  if (n >= 1) sequence.push(0);
  if (n >= 2) sequence.push(1);
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}


console.log(fibonacci(4)); 
console.log(fibonacci(9));  