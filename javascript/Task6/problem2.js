function getUser(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Ali" };
    console.log("User loaded");
    callback(user);
  }, 1000);
}
function getOrders(userId, callback) {
  setTimeout(() => {
    const orders = [
      { id: 101, product: "backeend" },
      { id: 102, product: "nodejs" }
    ];
    console.log("Orders loaded");
    callback(orders);
  }, 1000);
}
function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    const details = { orderId, status: "Shipped", price: "my_life" };
    console.log("Details loaded");
    callback(details);
  }, 1000);
}

getUser((user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      console.log("Final result:", details);
    });
  });
});