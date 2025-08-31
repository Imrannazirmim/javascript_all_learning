const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"])

// task 2:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    'passenger capacity': 5,
};
console.log(car["passenger capacity"]);

//task-3;
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);
// task-4;
let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
for(let prop in student1){
    console.log(student1, student1[prop])
}

// task:5 -> hard
let students = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for(let props in students){
    console.log(`key: ${props} | type ${typeof students[props]}`)
}