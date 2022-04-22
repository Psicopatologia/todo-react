import React from "react";
import '../styles/TodoSearch.scss'

function TodoSearch({searchText, setSearchText}) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchText(event.target.value)
    }
    return (
        <input
            onChange={onSearchValueChange}
            value={searchText}
            className="todo-search"
            placeholder='Search'
        />
    );
}

export { TodoSearch };