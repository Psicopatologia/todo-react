import React from "react";
import '../styles/TodoCounter.scss'

function TodoCounter({ totalTasks, completedTasks, loading }) {
    return (
        !loading &&
        <h2 className="todo-counter">
            You have completed {completedTasks} out of {totalTasks} tasks
        </h2>
    );
}

export { TodoCounter };