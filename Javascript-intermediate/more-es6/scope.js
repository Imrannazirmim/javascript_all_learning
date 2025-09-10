//block scope for if,function,for anymore.

function doMath(a, b) {
    console.log(a, b);
    const sum = a + b;
    const total = sum + 10;
    console.log(total);
    calculator();
}
// console.log(a, b); not use value for global scope
doMath();

//functional scope or local scope or hoisting

function calculator(a, b) {
    const sum = a + b;
    const total = sum + 20;
    console.log(total);
    function double(x) {
        return x * 2;
    }
    console.log("double value is ", double(400));
}
// console.log("double value is ", double(400));
