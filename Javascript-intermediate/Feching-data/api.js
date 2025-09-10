const loadBtn = document.getElementById("load-btn");
loadBtn.addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTodo(data));
});

const displayTodo = (todos) => {
    const container = document.getElementById("container");

    todos.forEach((todo) => {
        const postCard = document.createElement("div");
        postCard.innerHTML = `
          <div>
          <span>${todo.id}</span>
              <span>${todo.title}</span>
              <p>${todo.body}</p>
          </div>

        `;
        container.appendChild(postCard);
    });
};
