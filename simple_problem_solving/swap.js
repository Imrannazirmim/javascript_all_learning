let a = 5;
let b = 7;

// console.log(a, b);
// a = b;
// b = a;
// console.log(a, b); // not a resuable value

// solution:
console.log(a,b)

const temp = a;
a = b;
b = temp;
console.log(a, b);

// other solution

let x = 8;
let y = 5;
[x,y] = [y,x];
console.log(x,y);
