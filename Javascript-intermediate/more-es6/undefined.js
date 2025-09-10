function total(a, b) {
    const sum = a + b;
    console.log(sum);
}
total(2, 5);

function total2(a, b) {
    console.log("value of parameters", a, b);
    if (a === undefined || b === undefined) {
        return;
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}
const result = total2(5);
console.log(result);

const phone = { brand: "sumsang", price: 125000 };
const banks = ["sonali", "rupali", "jomuna"];
console.log(banks[3]);
delete banks[1];
console.log(banks[1]); //value of return undefined
