// give me a list numbers between 1 to 30 disvible by 5

for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// give me the sum of numbers from 1 to 30 that are divisible by 3
let sum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    sum = sum + i;
    console.log(sum);
  }
}
