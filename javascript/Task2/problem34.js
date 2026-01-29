function sameCase(word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) {
    return true;
  }
  return false;
}

console.log(sameCase("hello"));  
console.log(sameCase("Hello"));  
console.log(sameCase("HELLO")); 