
// bus ticket fare calculator
const age = 26;
const student = true
const ticketPrice = 1000;

if(age < 10){
    console.log('free ticket')
}else if(student === true || age >= 10 && age <= 30 ){
    const discount = ticketPrice * 50 / 100;
    const amount = ticketPrice - discount;
    console.log('you are student', amount)
}else if( age >=  30 && age <= 60){
    console.log(ticketPrice)
}else {
    const discount = ticketPrice * 15 / 100;
    const amount = ticketPrice -discount;
    console.log('you are old man for 15% discount', amount)
}