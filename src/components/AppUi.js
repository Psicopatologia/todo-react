import React from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        onComplete,
        onDelete
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Error :(</p>}
                {loading && <p>Loading...</p>}
                {!loading && !searchedTodos.length && <p>Add your first todo</p>}


                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        check={todo.completed}
                        onComplete={() => onComplete(todo.text)}
                        onDelete={() => onDelete(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    )
}

export { AppUI }