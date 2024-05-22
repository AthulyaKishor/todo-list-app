import React from 'react'
import '../styles/styles.css';
import TodoItem from './TodoItem';

function TodoList({todos,markComplete,deleteTodo}) {
    return (
        <div>
            {todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo} markComplete={markComplete} deleteTodo={deleteTodo} />
            )}
        </div>
    )
}

export default TodoList
