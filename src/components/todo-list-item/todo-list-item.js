import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <span className='todo-list-item'>
            <span className='todo-list-item-label' style={style}>
                {label}
            </span>

            <button className='btn btn-outline-danger btn-sm'>
                <i className='fa fa-trash'></i>
            </button>
            <button className='btn btn-outline-success btn-sm'>
                <i className='fa fa-exclamation'></i>
            </button>
        </span>
    );
}

export default TodoListItem;