import React from 'react';

import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

const SearchPanel = (props) => {

    return (
        <div className='search-panel'>
            <input placeholder='type to search' className='form-control' />
            <ItemStatusFilter {...props}/>
        </div>
    );
}

export default SearchPanel;
