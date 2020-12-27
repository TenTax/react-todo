import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    idCounter = 1;

    state = {
        term: '',
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make awesome app'),
            this.createTodoItem('Learn React')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.idCounter++
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);

            const newTodoData = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }
        });
    }

    addItem = (label) => {
        this.setState(({ todoData }) => {

            const newItem = this.createTodoItem(label);

            const newTodoData = [
                ...todoData,
                newItem
            ]

            return {
                todoData: newTodoData
            }
        });
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex(el => el.id === id);

        const newItem = {
            ...arr[idx],
            [propName]: !arr[idx][propName]
        }

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    toggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    }

    toggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    search(items, term) {
        if (!term.length) {
            return items;
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearch = (term) => {
        this.setState({ term });
    }

    render() {

        const { todoData, term } = this.state;

        const visibleItems = this.search(todoData, term);

        const doneCount = todoData.filter(el => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="app-container container">
                <AppHeader doneCount={doneCount} todoCount={todoCount} />
                <SearchPanel
                    onSearch={this.onSearch}
                    term={this.state.term} />
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone} />
                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }

}
