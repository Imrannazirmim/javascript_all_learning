function counter() {
    let count = 10;
    return function (user) {
        count = count + 1;
        console.log("inside the inner function", user, count);
    };
}
const innerFunc = counter();
innerFunc("imran");
innerFunc("imran");
innerFunc("imran");
innerFunc("imran");
const korimCounter = counter();
korimCounter("korim");
korimCounter("korim");
innerFunc("imran");
