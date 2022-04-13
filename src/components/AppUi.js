import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


function AppUI({
    totalTasks,
    completedTasks,
    searchText,
    setSearchText,
    searchedTodos,
    onComplete,
    onDelete,
}) {
    return (
        <React.Fragment>
            <TodoCounter
                totalTasks={totalTasks}
                completedTasks={completedTasks}
            />
            <TodoSearch
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <TodoList>
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