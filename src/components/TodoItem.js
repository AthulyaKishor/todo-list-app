import { Card, Checkbox } from '@mui/material';
import React from 'react'
import '../styles/styles.css';
import DeleteIcon from '@mui/icons-material/Delete';


const TodoItem=({todo,markComplete,deleteTodo})=> {
    return (
        <Card style={{ backgroundColor: "rgb(208 131 131)" }} className='list_container'>
            <Checkbox  color="success" checked={todo.completed} onChange={() => markComplete(todo.id)} />
            <h3 className='horizontal_scroll'>{todo.text}</h3>
            <DeleteIcon className='delete' onClick={()=>{deleteTodo(todo.id)}} />
        </Card>
    )
}

export default TodoItem
