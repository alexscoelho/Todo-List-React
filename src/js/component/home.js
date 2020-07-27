import React, { useState } from "react";

import { Form } from "./form.js";
import { List } from "./list.js";

//create your first component
export function Home() {
	const [task, setTask] = useState([]);
	return (
		<div className="container d-flex justify-content-center">
			<div>
				<h1>todos</h1>
				<Form todos={task} setTodos={setTask} />
				<List todos={task} setTodos={setTask} />
			</div>
		</div>
	);
}
