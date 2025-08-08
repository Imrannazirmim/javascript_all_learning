
const mobile = {
    name: 'sumsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for of : array use
// for in : object use
for(const prop in mobile){
    console.log(mobile[prop])
}
//object decration
const pencil = new Object({name: 'imran',age: 22});
console.log(pencil);
const rubber = Object.create({color:'black'})
console.log(rubber)

//