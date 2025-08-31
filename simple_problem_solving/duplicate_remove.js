
// duplicate value remove for array

const names = ['imran','nazir','mim','mansura','eyaqub','mim','imran', 'eyaqub'];
const numbers = [22, 44, 33, 93, 44, 22, 87, 98, 87];

function duplicateArr(arr){
    let unique = []

    for(const name of arr){
        if(unique.includes(name) === false){
            unique.push(name)
        }
        
    }
    return unique;
}
const resultArr = duplicateArr(names);
console.log(resultArr);
