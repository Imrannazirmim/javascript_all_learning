function multiply(x, y) {
    const mult = x * y;
    return mult;
}
const result = multiply(6, 6);
console.log(result);

//not primitive value
const eyaqub = { name: "eyaqub", balance: 500000 };
const imran = { name: "imran", balance: 200000 };
console.log("before call", eyaqub, imran);

function totalMoney(person1, person2) {
    person1.balance = 0;
    person2.balance = person2.balance / 2;
    const total = person1.balance + person2.balance;
    return total;
}

const money = totalMoney(eyaqub, imran);
console.log("balance", money);

//arguments
function add(a, b) {
    console.log(arguments);
    const params = [...arguments];
    console.log(params);
}
add(77, 33, 7, 28, 4);
