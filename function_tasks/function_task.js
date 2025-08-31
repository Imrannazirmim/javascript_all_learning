
//task 1
function multiply(num1, num2, num3, num4){

    return num1 * num2 * num3 * num4
}

console.log(multiply(4, 8, 16, 32))

//task 2
function multiplyNumber(number){
    if(number % 2 !== 0){
        return number * 2
    }else {
        return number / 2
    }
}

console.log(multiplyNumber(11))

//task 3

function make_avg(arr){
    if(arr.length === 0) return 0;
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;
}
const arrNumber = [1,2,3,4,5,20,30];
console.log(make_avg(arrNumber))

//task 4
function count_zero(binaryStr){
    let count = 0
    for(let i = 0; i < binaryStr.length; i++){
        if(binaryStr[i] === '0'){
            count++
        }

    }
    return count
}
const binary = '10101000010';
console.log(count_zero(binary))

// task 5
function  odd_even(inter){
    if(inter % 2 === 0){
        return 'Even'
    }else {
        return 'Odd';
    }
}

console.log(odd_even(4))