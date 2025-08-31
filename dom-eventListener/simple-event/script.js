const typingText = document.getElementById('typing-text');
const deleteBtn = document.getElementById('delete-btn');


typingText.addEventListener('keyup', (e) => {
    const textValue = e.target.value;
    if (textValue === 'delete') {
        deleteBtn.removeAttribute('disabled')
    } else {
        deleteBtn.setAttribute('disabled', true)
    }
})

const list = document.getElementById('list');
const addBtn = document.getElementById('add-btn')

list.addEventListener('click', (e) => {
    e.target.parentNode.removeChild(e.target)
})
addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = 'hi there this is programming'
    list.appendChild(li)
})