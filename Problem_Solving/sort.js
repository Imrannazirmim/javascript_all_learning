
//mutable meaning: change for value
//immutable meaning: not change for value

const numbers = [6,1,3, 5,8,2,7,9]
const friends = ['imran','mim','nazir','eyaqub','ali','emon','mansura','khatun']
const sortResult = numbers.sort();
console.log(sortResult)
console.log(friends.sort())


//ascending meaning: small to high
//descending meaning: high to small

const ages = [1, 100, 24, 35, 12, 15, 87, 99, 4];
console.log(ages.sort())

//ascending value
const sorted_ages = ages.sort(function (a,b){
    return a -b
})
console.log(sorted_ages)

//descending value
const sorted_ages_des = ages.sort(function (a,b) {
    return b -a
});
console.log(sorted_ages_des)

//copy array

const numbersCount = [1,3,4,5];
console.log(numbersCount);
const newArray = Array.from(numbersCount);
newArray[1] = 44
console.log(newArray)