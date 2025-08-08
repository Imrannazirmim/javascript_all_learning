
const computer = {
    brand: 'lenovo',
    price: 30000,
    processor: 'intel',
    sdd: '264gb',
    monitor: 'hp',

}
const values = Object.values(computer);
console.log(values)

//nested objects
const college = {
    name: 'vnc',
    class: ['11','12'],
    events: ['science fair','bijoy month','21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
console.log(college.unique.result.gpa)
const value = {...college}
console.log(value.unique);
