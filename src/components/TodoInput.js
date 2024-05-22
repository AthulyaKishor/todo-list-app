import React, { useState } from 'react'
import '../styles/styles.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'black',
      },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'black', 
        },
    },
});
const TodoInput = ({addTodo}) => {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim()) {
            addTodo(input);
            setInput('');
          }
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit} >
                <CustomTextField
                    label="Add item ..."
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />    
                <Button className='button' type='submit' variant="contained">Add</Button>
            </form>
        </div>
    )
}

export default TodoInput
