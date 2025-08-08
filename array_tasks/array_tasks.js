
const colors = ['red','blue','green','yellow','orange'];

//solution: 1
for(let i = colors.length -1; i >= 0; i--){
    console.log(colors[i])
}

//question: 2
const numbers = [12,98,5,41,23,78,46];
for(const number of numbers){
    if(number % 2 === 0){
        console.log(number)
    }
}

//solution: 3
const names = ['Tom','Tim','Tin','Tik'];
let nameLen = ''
for(const name of names){
    nameLen = nameLen+name;
}
console.log(nameLen)

//solution: 4
const statement = 'I am a hard working person';

const reversed = statement.split(' ').reverse().join(' ')
console.log(reversed)

//solution: 5
const input = [1,2,3];
input[0] = 99
console.log(input)

//solution: 6
const students = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]

for(const student of students){
    console.log(student.name + ' scored ' + student.marks)
}

//solution: 7
const scores = [
    [1,2],
    [3,4],
    [5,6]
]
scores[1][0] = 99
console.log(scores)
