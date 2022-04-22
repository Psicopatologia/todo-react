import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { Loading } from './Loading';
import { TodoHeader } from './TodoHeader'

function App(props) {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTasks,
        completedTasks,
        searchText,
        setSearchText,
        addTodo
    } = useTodos()
    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    totalTasks={totalTasks}
                    completedTasks={completedTasks}
                />
                <TodoSearch
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
            </TodoHeader>
            <TodoList>
                {error && <p>Error :(</p>}
                {loading && <Loading />}
                {!loading && !searchedTodos.length && <p>Add your first todo</p>}


                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        check={todo.completed}
                        completeTodo={() => completeTodo(todo.text)}
                        deleteTodo={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export default App;
