import React from 'react';
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm';
import './TodoList.css'

const TodoList = ({ todos= [{text: 'New TODO'}]}) => (
    <div className='list-wrapper'>
        <NewTodoForm />
        { todos.map((todo, index) => (
                                 <TodoListItem  key={index} todo={todo} />
                                ))
        }        
    </div>
);
    
export default TodoList;
