const todosArr = []

const toggleDone = e => {
	const todo = e.target
	todo.classList.toggle('done')
}

const deleteTodo = e => {
	const todo = e.target.closest('li.todo')
	todo.remove()
	console.log(todosArr.indexOf(todo.innerText))
	todosArr.splice(todosArr.indexOf(todo.innerText), 1)
	localStorage.setItem('todos', JSON.stringify(todosArr))
}

const addTodo = (input, start = false) => {
	if (typeof input === 'object') {
		input.preventDefault()
	}
	const todoInput = document.querySelector('#newTodo')
	const todo = typeof input === 'object' ? todoInput.value : input
	const todos = document.querySelector('#toDoList')
	const li = document.createElement('li')
	li.classList.add('todo')
	if (!todo) return
	todosArr.push(todo)
	if (!start) {
		localStorage.setItem('todos', JSON.stringify(todosArr))
	}
	li.innerText = todo
	const btn = document.createElement('button')
	btn.classList.add('delete')
	btn.addEventListener('click', deleteTodo)

	btn.innerHTML = '<i class="fas fa-trash"></i>'
	li.addEventListener('click', toggleDone)
	li.appendChild(btn)
	todos.appendChild(li)
	todoInput.value = ''
}

document.querySelector('#add').addEventListener('click', addTodo)

if (localStorage.getItem('todos')) {
	todosArr.push(...JSON.parse(localStorage.getItem('todos')))
	todosArr.forEach(todo => {
		addTodo(todo, true)
	})
}
