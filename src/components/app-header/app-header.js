import React from 'react';

import './app-header.css';

const AppHeader = ({ doneCount, todoCount }) => {
    return (
        <div className="app-header">
            <h2>Мои задачи</h2>
            <span>{todoCount} осталось, {doneCount} выполнено</span>
        </div>
    );
}

export default AppHeader;
