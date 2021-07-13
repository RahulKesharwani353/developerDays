import React, { useState } from 'react';

const TodoItem = ({todos}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    return todos.map((todo, index)=>(
        <div className={todo.isCompleted ? 'todo-row completed':
        'todo-row' }key = {index}>

            <div key= {todo.id} >
                {todo.text}
            </div>
            </div>
    )
    )
};

export default TodoItem;