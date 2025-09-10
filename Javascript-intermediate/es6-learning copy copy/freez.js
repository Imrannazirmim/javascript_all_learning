const employee = {
    name: 'Imran nazir mim',
    designation: 'QA',
    salary: 20000,
    experience: 1
}

//freez use for not change all value
const freeze = Object.freeze(employee);
console.log(freeze)//not a change of objects


console.log(employee)
delete employee.experience;
console.log(employee)
employee.salary = employee.salary + 5000;
console.log(employee)