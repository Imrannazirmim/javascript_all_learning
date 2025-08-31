const postBtn = document.getElementById("post-btn");
const postArea = document.getElementById("post-area");
const commentArea = document.getElementById("comment-area");

postBtn.addEventListener("click", () => {
  const para = document.createElement("p");
  commentArea.appendChild(para);
  para.innerText = postArea.value;
  para.classList.add("post-para");
  commentArea.appendChild(para);
  postArea.value = "";
});

//example code for class
class Car {
  constructor(name, color, brand, speed, made) {
    this.name = name;
    this.color = color;
    this.brand = brand;
    this.speed = speed;
    this.made = made;
  }
  getCars() {
    return `${this.name},${this.color},${this.brand},${this.speed},${this.made}`;
  }
}
const newCar = new Car("xiomi", "white gray", "xiomi s1", 250, "japan");
const buyCar = newCar.getCars();
console.log(buyCar);

function generatorOtp(){
    const otp = Math.floor(Math.random() * 90000 + 10000)
    return otp
}
console.log(generatorOtp())