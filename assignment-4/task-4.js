function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const idx in arr1) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
  }
  return true;
}

const r = [2 , 5 , 6] 
const v = [3, 5,,2]
const w = isSame(r, v);
console.log(w);
