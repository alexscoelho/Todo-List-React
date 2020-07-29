import React, { useState, useEffect } from "react";

import { Form } from "./form.js";
import { List } from "./list.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	// Get Data

	const [task, setTask] = useState([]);
	let baseUrl = "https://assets.breatheco.de/apis/fake/todos";
	const getData = () =>
		fetch(baseUrl + "/user/alexc")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setTask(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	useEffect(() => {
		getData();
	}, task);

	// Post Data
	// const postData = () =>
	fetch(baseUrl + "/user/alexc", {
		method: "PUT",
		body: JSON.stringify(),
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(resp => {
			console.log(resp.ok);
			console.log(resp.status);
			console.log(resp.text());
			return resp.json();
		})
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.log(error);
		});
	// useEffect(() => {
	// 	postData();
	// });
	return (
		<div className="container d-flex justify-content-center">
			<div>
				<h1 className="text-muted">todos</h1>
				<Form todos={task} setTodos={setTask} />
				<List todos={task} setTodos={setTask} />
				<Footer todos={task} setTodos={setTask} />
			</div>
		</div>
	);
}
