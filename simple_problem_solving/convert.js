// fit to inch

function fitOfInch(inch) {
  const fit = inch / 12;
  return fit;
}
const fitResult = fitOfInch(75);
console.log(fitResult);

//fit to inch for explain code
function fitToInchRemeining(inch) {
  const fitRemeining = parseInt(inch / 12);
  const inchRemeining = inch % 12;
  const resultRemaining = `${fitRemeining} fit ${inchRemeining} inch`;
  return resultRemaining;
}
const result = fitToInchRemeining(75);
console.log(result);

