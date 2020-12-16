import React from 'react';
import TodoListItem from './todo-list-item';

import './todo-list.css';

const TodoList = ({ todos }) => {

    const elements = todos.map((el) => {
        const { id, ...itemProps } = el;
        return (
            <li className="list-group-item" key={id}>
                <TodoListItem {...itemProps} />
            </li>
        );
    });

    return (
        <ul className="todo-list list-group">
            {elements}
        </ul>
    );
}

export default TodoList;