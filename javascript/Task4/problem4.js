function average(arr) {
const sum = arr.reduce((total, num) => total + num, 0);
return sum / arr.length;
}
console.log(average([10, 20, 30]));