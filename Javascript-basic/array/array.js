
const numbers = [1,24,59,83,88];
console.log(numbers.length)

numbers.pop()
numbers.push(4844)
console.log(numbers);

// includes 
const friends = ['imran','nazir','mim'];
console.log(friends.includes('nazir'));
console.log(friends.includes('eyaqub'));

// index of
console.log(friends.indexOf('eyaqub'));
console.log(friends.indexOf('mim'));

// is array
const age = 22;
const food = 'ros o gol l a';

console.log(Array.isArray(friends));
console.log(Array.isArray(age));
console.log(Array.isArray(food));
