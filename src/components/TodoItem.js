import { Card, Checkbox, Popover } from '@mui/material';
import React, { useState } from 'react'
import '../styles/styles.css';
import DeleteIcon from '@mui/icons-material/Delete';
const TodoItem = ({ todo, markComplete, deleteTodo }) => {
    const [popover, setPopover] = useState(null);
    const handlePopoverOpen = (event) => {
        const word = todo.text
        if (word.length > 25) {
            setPopover(event.currentTarget);
        }
    };

    const handlePopoverClose = () => {
        setPopover(null);
    };
    const open = Boolean(popover);
    return (
        <Card style={{ backgroundColor: todo.completed ? "rgb(62 165 105)" : "rgb(208 131 131)" }} className='list_container'>
            <Checkbox color="success" checked={todo.completed} onChange={() => markComplete(todo.id)} />
            <h3 onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose} className='horizontal_scroll'>{todo.text}</h3>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={popover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}

                onClose={handlePopoverClose}
            >
                <div className='popover'>{todo.text}</div>

            </Popover>
            <DeleteIcon className='delete' onClick={() => { deleteTodo(todo.id) }} />
        </Card>
    )
}

export default TodoItem
