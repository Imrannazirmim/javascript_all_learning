fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data) => data.json())
    .then((res) => console.log(res));
