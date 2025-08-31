// string type veribles

var name = "imran nazir mim";
console.log(name);
const age = 18;
console.log(age);
var isRich = true;
console.log(isRich);

// opt generator

function otpGenerator() {
  let otpNumber = "0123456789";
  let otp = "";
  let otpLength = otpNumber.length;
  for (let i = 0; i < 6; i++) {
    otp += otpNumber[Math.floor(Math.random() * otpLength)];
  }
  return otp;
}
console.log(otpGenerator());

isNaN(123);
isNaN(-1.23);
isNaN(5 - 2);
isNaN(0);

/**
 * variable ==> container storage local simple data
 * NAMING CONVENTION
 * 1. single word
 * 2. no quote
 * 3. no gap or dash
 * 4. can not start with number
 * 5. prefer camelCase
 *
 */

// number
var sunglassPrice = 80;

//string
var subject = "EEE";

//boolean

var passed = true;
