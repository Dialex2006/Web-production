import {useState} from "react";
import "./TaskListItem.css"

function TaskListItem(props) {

	const [isDone, setDone] = useState(false);

	function toggleCompletion(event) {
		if (event.target.tagName !== "A" && event.target.tagName !== "SPAN") {
			console.log(event.target.tagName);
			setDone(prev => !prev);
			console.log("Triggering")
		}
	}

	return (
		<li className={`list-group-item shadow ${isDone ? "complete" : ""}`} onClick={e => toggleCompletion(e)}>
			<div className={`d-flex justify-content-between`}>
				<p className={"p-0 m-0"}>{props.item.random_task}</p>
				<a href="#" className="text-decoration-none" onClick={e => props.removeTask(props.index)}><span className="d-inline-flex align-items-center badge rounded-pill bg-danger text-decoration-none">X</span></a>
			</div>
		</li>
	);
}

export default TaskListItem;