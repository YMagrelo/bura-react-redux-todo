import React, { Component } from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter';
import './App.css';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee and eating'),
      this.createTodoItem('Make awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    query: '',
    filter: 'all'
  }

 

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }

  deleteItem = (id) => {
    this.setState((prevState) => {
      const filteredArray = prevState.todoData.filter((item) => item.id !== id);
      return {
        todoData: filteredArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState((prevState) => {

      const newArray = [...prevState.todoData, newItem];

      return {
        todoData: newArray
      }
    })
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
      const oldItem = arr[idx];
      const newItem = {
        ...oldItem,
        [propName]: !oldItem[propName],
      }
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

  }

  onToggleDone = (id) => {

    this.setState(({ todoData }) => {
      
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onSearchChange = (query) => {
    this.setState({
      query: query
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  search = (items, query) => {
    if(!query) {
      return items;
    }
    return items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  filter(items,filter) {

    switch (filter) {
      case 'all':
        return items;

      case 'active':
        return items.filter((item) => !item.done);

      case 'done': 
        return items.filter((item) => item.done);
    
      default:
        return items;
    }
  }

  render() {
    const { todoData, query, filter } = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.filter((item) => !item.done).length;
    const filteredTodos = this.filter(this.search(todoData, query), filter);

    return (
      <div className="app-container">
        <AppHeader done={doneCount} toDo={todoCount} />
        <SearchPanel setQuery={this.onSearchChange} />
        <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        <TodoList
          todos={filteredTodos}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm addItem={this.addItem} />
      </div>
    );
  }
}
