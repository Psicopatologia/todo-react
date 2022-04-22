import React from 'react';

function TodoHeader(props) {
    return (
        <header>
            <h1 className="todo-title">Welcome Back</h1>
            {props.children}
        </header>
    )
}

export { TodoHeader }