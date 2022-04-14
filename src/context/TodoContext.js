import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchText, setSearchText] = React.useState('');

    let searchedTodos = [];

    if (searchText.length < 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchValue = searchText.toLowerCase();
            return todoText.includes(searchValue);
        })
    }

    const totalTasks = todos.length;
    const completedTasks = todos.filter(task => task.completed).length;

    const onComplete = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const tempTodos = [...todos];
        tempTodos[todoIndex].completed = true;
        saveTodos(tempTodos);
    }

    const onDelete = (text) => {
        const tempTodos = todos.filter(todo => todo.text !== text);
        saveTodos(tempTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTasks,
            searchText,
            setSearchText,
            searchedTodos,
            onComplete,
            onDelete,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}