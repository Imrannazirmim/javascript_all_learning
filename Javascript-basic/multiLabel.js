/**
 * Multiple level condition
 */
const price = 4000;

if (price >= 5000) {
  const discount = (price * 10) / 100;
  console.log(discount);
  const payment = price - discount;
  console.log(payment);
} else if (price > 2500) {
  const discount = (price * 5) / 100;
  console.log(discount);
  const payment = price - discount;
  console.log(payment);
} else {
  console.log(price);
}

const foodPrice = 500;
const age = 18;
if (age <= 12) {
  console.log("you can free for my food");
} else if (age <= 60) {
  const discount = (price * 50) / 100;
  const payment = price - discount;
  console.log(payment);
} else if (age >= 40) {
  const discount = (price * 20) / 100;
  const payment = price - discount;
  console.log(payment);
} else {
  console.log(price);
}
