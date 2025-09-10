let data;
data = 0; //0 is false
data = ""; //empty is false
data = " "; //this is empty white space inside that true value return
data = "0"; //true
data = false; //false
data = true; //true
data = null; //false
data = {}; //true
data = []; //true
console.log("value of data", data);

if (data) {
    console.log("value of data is truthy");
} else {
    console.log(data, "is falsy");
}
//use logical not
if (!data) {
    console.log("inside if with a falsy value");
}
