
// function structure

function generatorOtp(){
    const randomLength = '0123456789'
    let otp = ''
   for(let i = 0; i < 6; i++){
       otp += randomLength[Math.floor(Math.random() * randomLength.length)];
   }
       return otp;
}
const code = generatorOtp();
console.log(code)

//sum of array
function sumOfNumbers(numbers){
    let num = 0;
    for(const number of numbers){
        num = num + number;
    }
    return num;
}
const sumValue = [23, 55, 48, 93,38]
const sum = sumOfNumbers(sumValue);
console.log(sum)

//create a function that will return only even numbers
// return the sum of even numbers

function evenOfSum(num){
    let even = []
    let sum = 0
    for(const number of num){
        if(number % 2=== 0){
          even.push(number)
            sum = sum + number
        }
    }
    return {even, sum} ;
}
const allNumber = [1,4,5,33, 77, 44, 10, 100, 22, 14];
const sum1 = evenOfSum(allNumber)
console.log(sum1)