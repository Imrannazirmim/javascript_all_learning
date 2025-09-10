const numbers = [4, 8, 3, 5, 12];
// const double = [];
// for (const num of numbers) {
//     const result = num * 2;
//     double.push(result);
// }

const double = numbers.map(num => num * 3);
console.log(double)

const friends = ['imran', 'nazir', 'mim', 'eyaqub', 'mansura'];

const friendsLength = friends.map(name => name.length);
console.log(friendsLength);
const firstLetter = friends.map(name => name[0].toLowerCase());
console.log(firstLetter);
const result = numbers.map((num, index) => {
    return num * index
})
console.log(result)