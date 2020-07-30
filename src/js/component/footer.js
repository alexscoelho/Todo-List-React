import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//create your first component
export function Footer(props) {
	const { setTodos, todos } = props;
	let baseUrl = "https://assets.breatheco.de/apis/fake/todos";
	const handleClick = () => {
		setTodos([]);
		fetch(baseUrl + "/user/gerardine", {
			method: "DELETE"
			// headers: {
			// 	"Content-Type": "application/json"
			// }
		});
	};
	// Delete all tasks
	// const postData = () =>
	// fetch(baseUrl + "/user/alexc", {
	// 	method: "PUT",
	// 	body: JSON.stringify(todos),
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// })
	// 	.then(resp => {
	// 		console.log(resp.ok);
	// 		console.log(resp.status);
	// 	})
	// 	.then(data => {
	// 		console.log("Sucess", data);
	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 	});
	// useEffect(() => {
	// 	postData();
	// });

	// const [task, setTask] = useState(todos.length);

	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	setTodos(todos.concat(task));
	// 	setTask("");
	// };
	return (
		<div className="card-footer text-muted">
			{todos.length} Items left{" "}
			<button onClick={handleClick} className="btn btn-dark btn-sm">
				Clean all
			</button>
		</div>
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
	setTodos: PropTypes.func,
	todos: PropTypes.array
};
