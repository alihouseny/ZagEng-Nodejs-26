function unique(arr) {
let count = {};
for(let element of arr) {
if(count[element]) {
            count[element]++;
}else {
            count[element] = 1;
}
}
let newArr = [];
for(let key in count) {
if(count[key] == 1) {
            newArr.push(Number(key));
}
}
return newArr;
}