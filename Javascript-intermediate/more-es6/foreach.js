const numbers = [12, 48, 3, 8, 3, 8, 9, 7, 5, 6];

//foreach
numbers.forEach(num => console.log(num))

//filter

const greaterThan10 = numbers.filter(x => x > 10);
const evenNumber = numbers.filter(x => x % 2 === 0);
console.log(evenNumber)
console.log(greaterThan10)

//find
const firstEven = numbers.find((x => x % 2 === 0));
console.log(firstEven) // just return first element


//different way
const students = [
    {id: 1, name: 'imran', marks: 40},
    {id: 2, name: 'nazir', marks: 50},
    {id: 3, name: 'mim', marks: 70},
    {id: 4, name: 'mansura', marks: 85},
    {id: 5, name: 'emon', marks: 90},
]

const names = students.map(name => name.name);
console.log(names)
const marks = students.map((mark) => mark.marks);
console.log(marks);
const goodStudent = students.filter(student => student.marks > 80);
console.log(goodStudent)
const goodStudentFirst = students.find(student => student.marks > 80);
console.log(goodStudentFirst)//just first elements return

//reduce
const total = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(total)