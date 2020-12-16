import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span style={style} className='todo-list-item'>
            {label}
        </span>
    );
}

export default TodoListItem;