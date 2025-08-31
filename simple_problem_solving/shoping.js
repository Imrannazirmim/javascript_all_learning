const products = [
  {
    name: "shirt",
    price: 1200,
  },
  {
    name: "pant",
    price: 700,
  },
  {
    name: "churoni",
    price: 100,
  },
  {
    name: "shampoo",
    price: 300,
  },
];



function getShopping(products){
    let shopping = 0
    for(const product of products){
        shopping = shopping + product.price
    }
    return shopping
}
const total = getShopping(products);
console.log(total);
