
//reverse string
const sentence = 'I am learning react js';
// console.log(sentence)
let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
    // console.log(reverse)
}

//short reverse
const reversed = sentence.split('').reverse().join('');
console.log(reversed)
