function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 0)      resolve("Positive");
    else if (num === 0) resolve("Zero");
    else              reject("Negative");
  });
}


checkNumber(10)
  .then(console.log)        
  .catch(console.log);

checkNumber(-5)
  .then(console.log)
  .catch(console.log);       

async function testNumber(n) {
  try {
    const result = await checkNumber(n);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

testNumber(0); 
testNumber(-3);   