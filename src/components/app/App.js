import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter';
import './App.css';

export default class App extends Component {

  state = {
    todoData: [
      { label: 'Drink Coffe and eating', important: false, id: 1 },
      { label: 'Make awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ],
  }

  deleteItem = (id) => {
    this.setState((prevState) => {
      const filteredArray = prevState.todoData.filter((item) => item.id !== id);
      return {
        todoData: filteredArray
      }
    })
  }

  render() {
    return (
      <div className="app-container">
        <AppHeader />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
