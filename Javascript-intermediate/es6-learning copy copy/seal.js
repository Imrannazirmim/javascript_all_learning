const employee = {
    name: 'Imran nazir mim',
    designation: 'QA',
    salary: 20000,
    experience: 1
}
const seal = Object.seal(employee);//seal use just value modified
console.log(seal)
console.log(employee)
delete employee.experience;
console.log(employee)
employee.salary = employee.salary + 5000;
console.log(employee)