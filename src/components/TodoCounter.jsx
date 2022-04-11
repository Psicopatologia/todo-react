import React from "react";
import '../styles/TodoCounter.scss'

function TodoCounter(props) {
    return (
        <React.Fragment>
            <h1 className="todo-title">Welcome Back</h1>
            <h2 className="todo-counter">You have completed {props.completedTasks} out of {props.totalTasks} tasks </h2>
        </React.Fragment>
    );
}

export { TodoCounter };