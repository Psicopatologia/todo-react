import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        syncronizeItem: syncronizeTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchText, setSearchText] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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

    const addTodo = (text) => {
        const tempTodos = [
            ...todos,
            {
                completed: false,
                text,
            }
        ];
        saveTodos(tempTodos);
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const tempTodos = [...todos];
        tempTodos[todoIndex].completed = true;
        saveTodos(tempTodos);
    }

    const deleteTodo = (text) => {
        const tempTodos = todos.filter(todo => todo.text !== text);
        saveTodos(tempTodos);
    }

    return ({
            loading,
            error,
            totalTasks,
            completedTasks,
            searchText,
            setSearchText,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            syncronizeTodos
        }
    )
}

export { useTodos }