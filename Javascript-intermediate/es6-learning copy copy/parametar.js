function sum(num1, num2) {
    const total = num1 + num2;
    console.log(num1, num2, total);
}
sum(20, 40);
sum(20); //result for 20,undefined,NaN
// NaN for meaning: not a number

//es6 parametar for default parameter

function multiply(a = 2, b = 1) {
    const mult = a * b;
    console.log(mult);
}
multiply();
