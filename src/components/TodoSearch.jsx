import React from "react";
import { TodoContext } from "../context/TodoContext";
import '../styles/TodoSearch.scss'

function TodoSearch() {
    const {searchText, setSearchText} = React.useContext(TodoContext);
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