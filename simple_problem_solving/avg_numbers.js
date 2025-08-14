// avg of array odd numbers

function numbersAvg(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 !== 0) {
      sum = sum + number;
    }
  }
  const numLength = numbers.length;
  const avg = sum / numLength;
  return avg;
}
const avgNumber = [30, 41, 51, 81, 22, 60, 5, 90];
const resultAvg = numbersAvg(avgNumber);
console.log(resultAvg);
