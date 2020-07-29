import React, { useState } from "react";
import PropTypes from "prop-types";

//create your first component
export function List(props) {
	const [task, setTask] = useState("");
	const { setTodos, todos } = props;
	const handleRemove = index => {
		setTodos(todos.filter(current => current !== todos[index]));
	};
	return (
		<ul className="list-group">
			{todos.map((item, index) => (
				<li key={index} className="list-group-item">
					<span>
						<i
							className="fa fa-trash"
							onClick={() => handleRemove(index)}
						/>
					</span>
					{item.label}
				</li>
			))}
		</ul>
	);
}
List.propTypes = {
	setTodos: PropTypes.func,
	todos: PropTypes.array
};
