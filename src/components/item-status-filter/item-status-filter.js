import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    render() {
        const { onFilter, filter } = this.props;

        const buttons = this.buttons.map(({name, label}) => {

            const clazz = filter === name ? 'active' : null;

            return (
                <button
                    key={name}
                    type='button'
                    className={`btn btn-outline-primary ${clazz}`}
                    onClick={() => onFilter(name)}>
                    {label}
                </button>
            );
        });

        return (
            <div className='btn-group'> {buttons} </div>
        );
    }
}
