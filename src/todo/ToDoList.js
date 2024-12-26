import React, { useState } from 'react';

export default function ToDoList() {

	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	// console.log(toDo);
	const onSubmit = (event) => {
		event.preventDefault()
		if (toDo === "") {
			return;
		}
		setToDo("");
		setToDos((prevArray) => [toDo, ...prevArray]);
		// console.log("onSubmit: "+ toDo);
	};
	// console.log(toDos);
	const onDelete = (deleteIndex) => {
		setToDos((prevArray) => prevArray.filter((item, index) => index !== deleteIndex))
	}
	return (
		<div>
			<h1>My To Do ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder='Write Your toDo' />
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDos.map((toDo, index) =>
					<li key={index}>
						{toDo}
						<button onClick={() => onDelete(index)}>X</button>
					</li>)}

			</ul>
		</div>
	)
}
