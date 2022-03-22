import React from 'react';
import { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    const [ inputValue, setInputValue] = useState('');
    
    return (
      <div className='new-todo-form'>
          <input className='new-todo-input' 
                  type="text" 
                  placeholder='Type in your new TODO'
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
          />
          
          <button className='new-todo-button'>Create TODO</button>
      </div>  
    );
};

export default NewTodoForm;
