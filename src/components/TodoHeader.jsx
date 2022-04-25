import React from 'react';

function TodoHeader({children, loading}) {

    return (
        <header>
            <h1 className="todo-title">Welcome Back</h1>
            {React.Children.toArray(children).map((children) =>
                React.cloneElement(children, { loading }))
            }
        </header>
    )
}

export { TodoHeader }