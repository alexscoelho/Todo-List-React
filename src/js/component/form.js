import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Form(props) {
	const { setTodos, todos } = props;
	const [task, setTask] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		setTodos(todos.concat(task));
		setTask("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={e => setTask(e.target.value)}
				type="text"
				className="form-control"
				placeholder="No tasks, add a task"
				value={task}
			/>
		</form>
	);
}
Form.propTypes = {
	setTodos: PropTypes.func,
	todos: PropTypes.array
};
