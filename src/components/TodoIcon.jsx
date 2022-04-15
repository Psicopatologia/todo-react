import React from "react";
import {ReactComponent as Delete} from '../icons/delete.svg'
import {ReactComponent as Circle} from '../icons/circle.svg'
import {ReactComponent as Check} from '../icons/check.svg'
import {ReactComponent as Add} from '../icons/add.svg'
import '../styles/TodoIcon.scss'

function TodoIcon({type, onClick}) {
    const iconTypes = {
        Delete: <Delete />,
        Circle: <Circle />,
        Check: <Check />,
        Add: <Add />
    }
    
    return (
        <span className={`icon-container icon-container--${type}`} onClick={onClick}>
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon }