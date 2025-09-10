const numbers = [84, 93, 5, 8, 91];
console.log(numbers);
console.log(...numbers); //spread operators

//max number of spread operators
const maximum = Math.max(...numbers);
console.log(maximum);

//example
// const first = [1, 2, 4, 5, 8];
// const second = first;
// second.push(7);
// console.log(first);

const first = [39, 8, 29, 88, 4];
const second = [...first];
second.push(1);
console.log(first);
console.log(second);

const phone = { name: "sumsang", price: 40000, made: "china" };
const { name, price, made } = phone;
console.log(name);
console.log(price);
console.log(made);
