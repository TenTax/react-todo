import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

const App = () => {

    const todoData = [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'Make awesome app', important: true, id: 2 },
        { label: 'Learn React', important: false, id: 3 }
    ];

    return (
        <div className="app-container container">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} onDeleted={(id)=>console.log('del', id)} />
        </div>
    );
}

export default App;
