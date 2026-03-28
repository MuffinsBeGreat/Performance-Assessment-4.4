import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <Button />
      <br /> <br />
      <h1>Form Input</h1>
      <Input value={inputValue} onChange={handleInput} />  
      <h3>You entered: {inputValue}</h3>
      <br /> <br />
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
