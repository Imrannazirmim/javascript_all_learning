const mobiles = [
  { name: "sumsung", price: 20000, camera: "12mp", color: "black" },
  { name: "oppo", price: 15000, camera: "12mp", color: "black" },
  { name: "xiomi", price: 25000, camera: "12mp", color: "black" },
  { name: "iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "hauwel", price: 30000, camera: "12mp", color: "black" },
  { name: "realme", price: 35000, camera: "12mp", color: "black" },
];

function getMobiles(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const getPhone = getMobiles(mobiles);
console.log(getPhone);
