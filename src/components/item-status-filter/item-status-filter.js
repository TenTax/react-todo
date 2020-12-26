import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
    render() {
        const {filter: {category}, onItemStatusFilter} = this.props;

        return (
            <div className='btn-group'>
                <button 
                    type='button' 
                    className={`btn btn-outline-primary ${category === 'all' ? 'active' : ''}`}
                    onClick={() => onItemStatusFilter('all')}>
                        All
                </button>
                <button 
                    type='button' 
                    className={`btn btn-outline-primary ${category === 'active' ? 'active' : ''}`}
                    onClick={() => onItemStatusFilter('active')}>
                        Active
                </button>
                <button 
                    type='button' 
                    className={`btn btn-outline-primary ${category === 'done' ? 'active' : ''}`}
                    onClick={() => onItemStatusFilter('done')}>
                        Done
                </button>
            </div>
        );
    }
}
