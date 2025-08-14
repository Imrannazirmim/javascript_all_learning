const products = [
  {
    name: "shirt",
    price: 1200,
    quantity: 2,
  },
  {
    name: "pant",
    price: 700,
    quantity: 3,
  },
  {
    name: "churoni",
    price: 100,
    quantity: 5,
  },
  {
    name: "shampoo",
    price: 300,
    quantity: 4,
  },
];

function getShoppingCart(products) {
  let total = 0;
  for (const product of products) {
    const itemCost = product.price * product.quantity;
    total = total + itemCost;
  }
  return total;
}
const shopping = getShoppingCart(products);
console.log(shopping);
