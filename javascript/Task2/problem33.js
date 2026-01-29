function dailyTemperatures(temps) {
  let result = new Array(temps.length).fill(0);
  let stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      let prev = stack.pop();
      result[prev] = i - prev;
    }
    stack.push(i);
  }
  return result;
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); 
console.log(dailyTemperatures([30, 40, 50, 60])); 