const multiply = (a, b) => a * b;
const mult = multiply(5, 8);
console.log(mult);

// arrow function multi line
const calculation = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const mutli = x * y;
    const division = x / y;
    const result = sum + sub + mutli + division;
    return result;
};
calculation();
