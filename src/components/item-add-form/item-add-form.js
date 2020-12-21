import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({onAddItem}) => {
    return (
        <div className="item-add-form">
            <button 
                className="btn btn-outline-secondary"
                onClick={() => onAddItem('new Item')}>
                    Add item
            </button>
        </div>
    );
}

export default ItemAddForm;