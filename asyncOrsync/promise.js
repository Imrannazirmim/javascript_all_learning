const getData = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    if (num > 5) {
        resolve({
            num: num,
        });
    } else {
        reject({ err: "Data is not available" });
    }
});
getData.then((data) => console.log("promise resolve", data)).catch((error) => console.log(error));

const getData1 = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    if (num > 5) {
        resolve({
            num: num,
        });
    } else {
        reject({ err: "Data is not available" });
    }
});
getData.then((data) => console.log("promise resolve", data)).catch((error) => console.log(error));

Promise.all(getData, getData1)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
