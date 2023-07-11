import React from "react";


//create your first component
const ToDoList = () => {

	return (
		<>
			<h2>Todo List</h2>
		<div className="container">
		
			<ul>
				<li>
				<input type="text" id="taskData" placeholder="What to do today?"></input>
				</li>
			</ul>
			<div className="itemCounter"> item(s) left..</div>
		</div>
		</>
	);
};
function getTodo(){
	var t = document.getElementById("#taskData").value;
	document.getElementById("itemCounter").innerHTML = t;
}
export default ToDoList;
