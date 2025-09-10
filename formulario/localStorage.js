const pintarTodo = document.getElementById('pintaTodo');
const formulario = document.getElementById('formulario');
const templateTodo = document.getElementById('templateTodo').content;
const alert = document.querySelector('.alert');

let todos = []

formulario.addEventListener('submit', e => {
    e.preventDefault()
    alert.classList.add('d-none');
    const data = new FormData(formulario);
    const [todo] = [...data.values()];

    if(!todo.trim()){

        alert.classList.remove('d-none');
        console.log("te equivocaste");
        return
    }

    agregarTodo(todo)
    pintarTodos()
})

const agregarTodo = todo => {
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`
    };

    todos.push(objetoTodo)
}

const pintarTodos = () => {

    localStorage.setItem('todos', JSON.stringify(todos))

    pintarTodo.textContent = "";

    const fragment = document.createDocumentFragment()

    todos.forEach(item => {
        const clone = templateTodo.cloneNode(true)
        clone.querySelector('p').textContent = item.nombre
        clone.querySelector('.btn-danger').dataset.id = item.id

        fragment.appendChild(clone)
    }) 

    pintarTodo.appendChild(fragment)

};

document.addEventListener('click', e => {
    // console.log(e.target.dataset.id)
    // console.log(e.target.matches(".btn-danger"));

    if(e.target.matches(".btn-danger")){
        todos = todos.filter((item) => item.id !== e.target.dataset.id);
        pintarTodos();
    }
});

document.addEventListener('DOMContentLoaded', (e) => {
    
    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'));
        pintarTodos();
    }
})