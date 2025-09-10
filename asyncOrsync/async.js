console.log("One");
console.log("Two");

async function loadingData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data[0]);
    } catch (error) {
        console.log(error);
    }
}
loadingData();
console.log("Four");
console.log("Five");

const loadingFetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);
};

loadingFetchData();

class Car {
    constructor(name, brand, speed, model) {
        this.name = name;
        this.brand = brand;
        this.speed = speed;
        this.model = model;
    }
    getCar() {
        return `${this.name},${this.brand},${this.speed},${this.model}`;
    }
}

const newCar = new Car("Roll Royels", "r1", 250, "roll royel a15");
const buyCar = newCar.getCar();
console.log(buyCar);
