import React from "react";
import { TodoIcon } from "./TodoIcon";
import '../styles/TodoItem.scss';

function TodoItem(props) {
    return (
        <li className={`todo-item ${props.check ? 'checked' :''}`}>
            <TodoIcon
                type={props.check ? 'Check' : 'Circle'}
                onClick={props.completeTodo}
            />
            <p>{props.text}</p>
            <TodoIcon type="Delete" fill="red" onClick={props.deleteTodo} />
        </li>
    )
}

export { TodoItem };