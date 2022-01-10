import {useEffect, useState} from "react";
import TaskListItem from "./TaskListItem";
import axios from "axios";

function TaskList(props) {
	const [items, setItems] = useState([]);

	function addTask(task) {
		setItems(items => [...items, {random_task: task}]);
	}

	function removeTask(index) {
		setItems(items => items.filter((element, i) => i !== index));
	}

	useEffect(() => {
		for (let i = 0; i < 3; i++) {
			axios.get("https://21wsp10pw.course.tamk.cloud/api/v1/task/random").then(res => {
				setItems(prevItems => [...prevItems, res.data]);
			}).catch(err => {
				console.log(err);
				throw err;
			});
		}
	}, []);

	let list_items = items.map((item, index) =>
		<TaskListItem removeTask={removeTask} index={index} key={item.random_task} item={item}/>)

	return (
		<div>
			<div className="modal fade" data-testid={"modal-window"} tabIndex="-1" id="add-modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Adding task</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
						</div>
						<div className="modal-body">
							<form action="">
								<label htmlFor="task-input" className="form-label">Task</label>
								<input type="text" className="form-control" id="task-input"/>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={e => {
								let value = document.getElementById("task-input").value;
								addTask(value);
								document.getElementById("task-input").value = "";
							}}>Add
							</button>
							<button type="button" data-testid={"modal-close-btn"} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
			<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#add-modal">Add</button>
			<ul className="mt-3 list-group">
				{list_items}
			</ul>
		</div>
	);
}

export default TaskList;