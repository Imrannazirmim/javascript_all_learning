const heights2 = [167, 190, 120, 165, 137];

console.log(Math.min(...heights2));

//task 2 for smaller name identifier

const friends = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallerName(str) {
  if (typeof str !== "string") return;
  const lowName = str.split(" ");
  console.log(lowName);
  let lowWord = '';
  for(let i = 0; i < lowName.length; i++){
    if(lowName[i].length < lowWord.length){
        lowWord = lowName[i]
    }
  }
  return lowWord;
}
const result = smallerName(friends);
console.log(result);
