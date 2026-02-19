function filterLongStrings(arr) {
return arr.filter(str => str.length > 4);
}

console.log(filterLongStrings(["hi", "hello", "welcome"]));