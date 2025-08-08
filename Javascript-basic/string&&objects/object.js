
//object learning
const laptop = {
    name: 'chuwi',
    price: `${35000}tk`,
    brand: 'chuwi pro book',
    ram: 8,
    ssd: 264,
    display: 15.6,
    buy: true,
    accessories: {
        keyboard: true,
        color: 'white',
        camera: true,
    }

}
console.log(laptop.accessories)

class Car{
    constructor(name,color,speed,price){
        this.name = name;
        this.color = color;
        this.speed = speed;
        this.price =price
    }
    getCar(){
        return `${this.name},${this.color},${this.speed},${this.price}`
    }
}
const newCar = new Car('pagla', 'white gray', 250, 2500000);
const runCar = newCar.getCar();
console.log(runCar);
