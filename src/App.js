import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import Card from '@mui/material/Card';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const data = [
      { id: 1, text: 'Test Data 1', completed: false },
      { id: 2, text: 'Test Data 2', completed: false },
      { id: 3, text: 'Test Data 3', completed: true }
    ]
    setTodos(data);
  }, []);

  const addTodo = (todo) => {
    const lastId = todos[todos.length - 1];
    const newTodo = { id: lastId ? lastId.id + 1 : 1, text: todo, completed: false }
    setTodos([...todos, newTodo])
  }
  const markComplete = (id) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      setTodos(updatedTodos);
    }
  };
  const deleteTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  return (
    <div className="App">
      <Card style={{ backgroundColor: "#ddb9b9" }} className='card' variant="outlined">
        <h2>TODO LIST APP</h2>
        <TodoInput addTodo={addTodo} />
        {!todos.length ? <h3 className='nodata'>No Data Available</h3> : <TodoList todos={todos} markComplete={markComplete} deleteTodo={deleteTodo} />}

      </Card>
    </div>
  );
}

export default App;
