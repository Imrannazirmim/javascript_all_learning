const addBtn = document.getElementById("add_localstorage");
const readBtn = document.getElementById("read_localstorage");
const primitiveNum = document.getElementById("primitive");
const getNonPrimitive = document.getElementById("get_nonprimitive");

const addNumberTols = () => {
    const number = Math.ceil(Math.random() * 10);
    console.log(number);
    localStorage.setItem("number", number);
};

const getNumberTols = () => {
    const number = localStorage.getItem("number");
    console.log("from saved local storage", number);
};

const addPrimitiveTols = () => {
    const product = { name: "watch", price: 400, quantity: 100 };
    const productJson = JSON.stringify(product);
    localStorage.setItem("product", productJson);
};

const getNonPrimitiveTols = () => {
    const product = localStorage.getItem("product");
    const productParse = JSON.parse(product);
    console.log(productParse);
};

addBtn.addEventListener("click", addNumberTols);
readBtn.addEventListener("click", getNumberTols);
primitiveNum.addEventListener("click", addPrimitiveTols);
getNonPrimitive.addEventListener("click", getNonPrimitiveTols);
