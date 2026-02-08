function delay(message, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, time);
  });
}
async function printNumbers() {
  await delay(1, 1000);
  await delay(2, 1000);
  await delay(3, 1000);
  await delay(4, 1000);
}
printNumbers();