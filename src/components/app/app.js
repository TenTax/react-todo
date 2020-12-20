import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Drink coffee', important: false, id: 1 },
            { label: 'Make awesome app', important: true, id: 2 },
            { label: 'Learn React', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }
        });
    }

    render() {
        return (
            <div className="app-container container">
                <AppHeader />
                <SearchPanel />
                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
            </div>
        );
    }

}
