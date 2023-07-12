import React, { useState } from "react";


//create your first component
const ToDoList = () => {
	const [todos, setTodos] = useState([])
	const [userInput, setUserInput] = useState("")

	const addTodo = (onKeyDownEvent) => {
		if (onKeyDownEvent.key === "Enter"){
			const newTodoList = [...todos, userInput]
			setTodos(newTodoList)
			setUserInput("")
		}
	}

	const removeTodo = (index) => {
		const newTodoList = todos.filter((todos,i) => {i != index})
		setTodos(newTodoList)
	}

	return (
		<>
			<h2>Todo List</h2>
		<div className="container">
		
			<ul>
				<li>
				<input 
				type="text"
				id="taskData"
				onChange={(event)=> setUserInput(event.target.value)}
				onKeyDown={addTodo}
				placeholder="What to do today?"
				></input>
				</li>
				{todos.map((todos, index) => {
					return (
						<li key={index}>
							{console.log(todos, "hey")}
							- {todos}
							<div onClick={() => removeTodo(index)}><i class="bi bi-trash-fill"></i></div>
						</li>
					)
				})}
			</ul>
			<div className="itemCounter"> {todos.length} left..</div>
		</div>
		</>
	);
};
export default ToDoList;
