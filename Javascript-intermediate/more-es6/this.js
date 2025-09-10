class Vehicle {
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price
    }

    getThis() {
        console.log(this)
    }

    getPrice() {
        console.log(`${this.price}`)
    }
}

const car1 = new Vehicle('car', 'toyota', 500000);
const car2 = new Vehicle('car', 'toyota', 2500000);
car1.getThis();
car2.getPrice();
console.log(car1)
console.log(car2)
