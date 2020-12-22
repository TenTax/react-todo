import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    idCounter = 1;

    state = {
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
        this.setState(({todoData}) => {

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

    toggleImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);

            const newItem = {
                ...todoData[idx],
                important: !todoData[idx].important
            }

            const newTodoData = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }
        });
    }

    toggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);

            const newItem = {
                ...todoData[idx],
                done: !todoData[idx].done
            }

            const newTodoData = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newTodoData
            }
        });
    }

    render() {
        return (
            <div className="app-container container">
                <AppHeader />
                <SearchPanel />
                <TodoList 
                    todos={this.state.todoData} 
                    onDeleted={this.deleteItem} 
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}/>
                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }

}
