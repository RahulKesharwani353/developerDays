import React,{ useState } from 'react';
import TodoFrom from './todoFrom';
import TodoItem from './todoItem';
import './todo.css'
function TodoList ()  {

    const [todos, setTodos] = useState([]);  
    const addTodo = todo =>{
        // if(!todo.text || /^\s*$/.test(todo.text)){
        //     return
        // }

        const newTodos = [todo, ...todos]
        setTodos(newTodos);
        console.log(...todos);
    }


    return (
        <div className="todoApp">
           <h1>Aur Kya Plan Hai..?</h1>
           <TodoFrom onSubmit={addTodo} />
           <TodoItem todos={todos} />
        </div>
    );
};

export default TodoList;