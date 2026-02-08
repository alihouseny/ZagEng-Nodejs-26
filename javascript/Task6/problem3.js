function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("User loaded");
      resolve({ id: 1, name: "Ali" });
    }, 1000);
  });
}
function getOrders(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Orders loaded");
      resolve([
        { id: 101, product: "Laptop" },
        { id: 102, product: "Phone" }
      ]);
    }, 1000);
  });
}
function getOrderDetails(orderId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Details loaded");
      resolve({ orderId, status: "Shipped", price: 1200 });
    }, 1000);
  });
}

getUser()
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => console.log("Final result:", details));