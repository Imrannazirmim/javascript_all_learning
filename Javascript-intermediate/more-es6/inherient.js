class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, age);
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    eat() {
        return `${this.breed} is eating`;
    }
    bark() {
        console.log(`${this.name} is barking `);
    }
}
const getDog = new Dog("toto", "cake");
const eatDog = getDog.eat();
console.log(eatDog);
