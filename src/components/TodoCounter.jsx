import React from "react";
import { TodoContext } from "../context/TodoContext";
import '../styles/TodoCounter.scss'

function TodoCounter() {
    const {totalTasks, completedTasks} = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <h1 className="todo-title">Welcome Back</h1>
            <h2 className="todo-counter">You have completed {completedTasks} out of {totalTasks} tasks </h2>
        </React.Fragment>
    );
}

export { TodoCounter };