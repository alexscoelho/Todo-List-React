import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function Footer(props) {
	const { todos } = props;
	// const [task, setTask] = useState(todos.length);

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	setTodos(todos.concat(task));
	// 	setTask("");
	// };
	return (
		<div className="card-footer text-muted">{todos.length} Items left</div>
		// <form onSubmit={handleSubmit}>
		// 	<input
		// 		onChange={e => setTask(e.target.value)}
		// 		type="text"
		// 		className="form-control"
		// 		placeholder="No tasks, add a task"
		// 		value={task}
		// 	/>
		// </form>
	);
}
Footer.propTypes = {
	todos: PropTypes.array
};
