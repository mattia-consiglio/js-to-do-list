const toggleDone = e => {
	const todo = e.target
	todo.classList.toggle('done')
}

const deleteTodo = e => {
	const todo = e.target.closest('li')
	todo.remove()
}

document.querySelector('#add').addEventListener('click', e => {
	console.log('clicked')
	e.preventDefault()
	const todoInput = document.querySelector('#newTodo')
	const todo = todoInput.value
	const todos = document.querySelector('#toDoList')
	const li = document.createElement('li')
	li.innerText = todo
	const btn = document.createElement('button')
	btn.addEventListener('click', deleteTodo)
	btn.innerHTML = '<i class="fas fa-trash"></i>'
	li.addEventListener('click', toggleDone)
	li.appendChild(btn)
	todos.appendChild(li)
	todoInput.value = ''
})
