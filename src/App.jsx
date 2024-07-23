import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <h1 className='h1'>To-Do List</h1>
      <div>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='add' onClick={handleAddTodo}>+</button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-card">
            <span>{todo}</span>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className='clear' onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default App;
