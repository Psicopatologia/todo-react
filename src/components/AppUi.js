import React from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { Loading } from './Loading';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

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
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal = {setOpenModal}
                openModal = {openModal}
            />
        </React.Fragment>
    )
}

export { AppUI }