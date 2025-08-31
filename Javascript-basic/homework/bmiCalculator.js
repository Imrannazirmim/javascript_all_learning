// bmi calculator and health category
const weight = 78
const height = 2.2;

const BMI = weight / (height ** 2);
console.log(BMI.toFixed(2))

if(BMI <= 18.5){
    console.log('you are underweight')
}else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('you are normal')
}else if(BMI >= 25 && BMI <= 29.9){
    console.log('you are overweight')
}else {
    console.log('you are fat man && you are obese')
}