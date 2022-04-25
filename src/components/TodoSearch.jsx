import React from "react";
import '../styles/TodoSearch.scss'

function TodoSearch({searchText, setSearchText, loading}) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchText(event.target.value)
    }
    return (
        !loading&&<input
            onChange={onSearchValueChange}
            value={searchText}
            className="todo-search"
            placeholder='Search'
        />
    );
}

export { TodoSearch };