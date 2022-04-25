import React from "react";
import '../styles/TodoList.scss'

function TodoList(props) {
    return (
        <section className="todo-list">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {
                !props.loading &&
                ((!props.totalTasks) ?
                props.onEmptyTodos():
                !props.searchedTodos.length &&
                props.onEmptySearchResults())
            }
            {/* props.render || props.children */}
            {props.render ?
                props.searchedTodos.map(props.render):
                props.searchedTodos.map(props.children)}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };