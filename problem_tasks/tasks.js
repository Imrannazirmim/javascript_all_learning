//task: 1
//celsius to fahrenhit

function temperature(celsius) {
  const fahrenhit = (celsius * 9) / 5 + 32;
  return fahrenhit;
}
const fahrenhitResult = temperature(20);
console.log("fahrenhit resut: ", fahrenhitResult + " F");

// task: 2

const numbers = [5, 6, 11, 12, 98, 5];

let find = 5;
let count = 0;

for (const number of numbers) {
  if (number === find) {
    count++;
  }
}
console.log(count);

//alternative

const v = numbers.filter((num) => num === find).length;
console.log(v);

const numbers2 = [5, 6, 11, 12, 98, 5];
let find2 = 25;
ctn = 0;
for (const num of numbers2) {
  if (num === find2) {
    ctn++;
  } else {
    ctn = 0;
  }
}
console.log(ctn);

// task3
const vowels = ["a", "e", "i", "o", "u"];
function checkingVowelCount(strV) {
  let count = 0;
  for (const vowel of strV.toLowerCase()) {
    if (vowels.includes(vowel)) {
      count++;
    }
  }
  return count;
}
const check = checkingVowelCount("Bangladesh is very beutifull country");
console.log(check);

//task 4

const longStr = ' I am learning Programming to become a programmer';
function longestStr(str){
  if(typeof str !== 'string') return
  const longestWords = str.split(' ');
  let words = '';
  for(let i = 0; i < longestWords.length; i++){
    if(longestWords[i].length > words.length){
      words = longestWords[i]
    }
    
  }
  return words
}
const result = longestStr(longStr);
console.log(result);

// task 5
let min = 10
let max = 20
const random = Math.floor(Math.random() *  (max - min + 1)) + min;
console.log(random);
