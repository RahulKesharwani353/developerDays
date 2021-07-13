import React, { useState } from 'react';

function TodoFrom (props) {

    const handelChanges = e =>{
        setInput(e.target.value)
    };
    const [input, setInput] = useState('');
    const handelSubmit = e=>{
        e.preventDefault();
        props.onSubmit({
           id: Math.floor(Math.random()*10000), text: input 
        });
        setInput('')
    };

    
    return (
        <div>
            <form className='todo-form' onSubmit={handelSubmit}>
                <input type= 'text' placeholder= 'add your todo list'
                value = {input}
                name ='text'
                className = 'todo-input'
                onChange ={handelChanges}
                />
                   <button className= 'todo-button'>add todo</button>
            </form>
         
        </div>
    );
};

export default TodoFrom;