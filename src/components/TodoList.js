import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit() {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);

            setInputValue('');
        }
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div className="container">
            <div className="todo-box">
                <input type="text" value={inputValue} onChange={handleInputChange} />

                <button onClick={handleSubmit}>Add Todo</button>

                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;