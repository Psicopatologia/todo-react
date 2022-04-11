import React from "react";
import '../styles/TodoList.scss'

function TodoList(props) {
    return (
        <section >
            <ul className="todo-list">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };