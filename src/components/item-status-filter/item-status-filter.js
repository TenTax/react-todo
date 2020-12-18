import React from 'react';

const ItemStatusFilter = () => {
    return (
        <div class='btn-group' role='group' aria-label='Basic outlined example'>
            <button type='button' class='btn btn-outline-primary active'>All</button>
            <button type='button' class='btn btn-outline-primary'>Active</button>
            <button type='button' class='btn btn-outline-primary'>Done</button>
        </div>
    );
}

export default ItemStatusFilter;