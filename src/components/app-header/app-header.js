import React from 'react';

import './app-header.css';

const AppHeader = ({doneCount, todoCount}) => {
    return (
        <div className="app-header">
            <h2>My todo List</h2>
            <span>{todoCount} more to do, {doneCount} done</span>
        </div>
    );
}

export default AppHeader;
