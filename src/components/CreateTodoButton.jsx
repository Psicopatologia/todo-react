import React from "react";
import { TodoIcon } from "./TodoIcon";
import '../styles/CreateTodoButton.scss'

function CreateTodoButton({setOpenModal, openModal}) {
    return (
        // setOpenModal(prevState => !prevState)
        <button
            className={`create-task${openModal ? " rotated" : ""}`}
            onClick={() => setOpenModal(!openModal)}
        >
            <TodoIcon type="Add"/>
        </button>
    );
}

export { CreateTodoButton };