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
        { id: 101, product: "backend" },
        { id: 102, product: "nodejs" }
      ]);
    }, 1000);
  });
}
function getOrderDetails(orderId) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Details loaded");
      resolve({ orderId, status: "Shipped", price: "my_life" });
    }, 1000);
  });
}


/******** */
async function loadAllData() {
  try {
    const user    = await getUser();
    const orders  = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);
    console.log("Final result:", details);
  } catch (err) {
    console.error("error:", err);
  }
}


loadAllData();