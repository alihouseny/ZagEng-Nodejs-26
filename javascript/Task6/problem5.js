/*Why undefined? 
 Because setTimeout is asynchronous. The return inside the callback never reaches the outer function
 */



 //Callback version

 function getData(callback) {
  setTimeout(() => {
    callback("Data Loaded");
  }, 1000);
}

getData(result => console.log(result));  


//Promise version
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 1000);
  });
}

getData().then(console.log);        



//Async/Await version
async function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}

async function main() {
  const result = await getData();
  console.log(result);               
}

main();