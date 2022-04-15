import React from "react";
import { TodoContext } from "../context/TodoContext";
import '../styles/TodoForm.scss'

function TodoForm() {
    const inputText = React.useRef(null);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        if (!newTodoValue) return;
        addTodo(newTodoValue);
        setNewTodoValue('');
        inputText.current.focus();
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Add new TODO
            </label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Todo text"
                ref={inputText}
                autoFocus
            />
            <button
                type="submit"
            >
                Add
            </button>
        </form>
    )
}

export { TodoForm }