
// tasks no: 1;

const fruits = ['apple','tomato','orange','banana','watermelon'];
console.log(fruits[3])
fruits[2] = 'jambura';
console.log(fruits)

//tasks 2;

const tourist = ['cox baz','bandorban','chittagong',];
console.log(tourist)
tourist.push('rajshahi')
console.log(tourist)

tourist.push('al aqsa', 'kaba ghor');
console.log(tourist)
tourist.pop();
console.log(tourist)

//tasks 3;
const books = ['quran','javascript','php','brain wash','python'];

if(books.includes('javascript')){
    console.log('this is book indication for javascript ')
}else {
    console.log('this book not found')
}

//task 4;
const booksName = ['bangla','english','math','physics'];
const students = ['imran','nazir','mim','khan'];
const result = booksName.concat(students);
console.log(result)