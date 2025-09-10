const student = {
    name: 'imran nazir mim',
    age: 22,
    college: true,
    gpa: 5.0
}
for (const key in student) {
    const value = student[key];
    console.log(value)
}
const studentEntries = Object.entries(student);
console.log(studentEntries)
for (const keys of studentEntries) {
    for (const key of keys) {
        console.log(key)
    }
}