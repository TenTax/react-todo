import React from 'react';

import './search-panel.css';
import ItemStatusFilter from './item-status-filter';

const SearchPanel = () => {

    return (
        <div className='search-panel'>
            <input placeholder='type to search' className='form-control' />
            <ItemStatusFilter />
        </div>
    );
}


export default SearchPanel;