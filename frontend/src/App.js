import './App.css';
import TaskList from "./components/TaskList";
import {useEffect, useState} from "react";
import axios from 'axios';

function App() {


	return (
		<div className="App container p-3">
			<TaskList/>
		</div>
	);
}

export default App;
