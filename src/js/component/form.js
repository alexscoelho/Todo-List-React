import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//create your first component
export function Form(props) {
	// const todoObj = { label: task, done: false };
	const { setTodos, todos } = props;
	const [task, setTask] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		setTodos(todos.concat({ label: task, done: false }));
		// setTodos(todos.push(todoObj));
		setTask("");
	};
	// Post Data
	let baseUrl = "https://assets.breatheco.de/apis/fake/todos";
	// console.log("result", todos);
	const postData = () =>
		fetch(baseUrl + "/user/gerardine", {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				console.log("resp:", resp.ok);
				console.log("status:", resp.status);
				// console.log(resp.text());
				// return resp.json();
			})
			.then(data => {
				console.log("Sucess", data);
			})
			.catch(error => {
				console.log(error);
			});
	useEffect(() => {
		postData();
	});
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
