import React from 'react';

import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

const SearchPanel = ({onSearch, term, ...props}) => {

    const onSearchChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <div className='search-panel'>
            <input 
                placeholder='type to search' 
                className='form-control'
                onChange={onSearchChange}
                value={term} />
            <ItemStatusFilter />
        </div>
    );
}

export default SearchPanel;
