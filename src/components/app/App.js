import React from 'react';
import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter';
import './App.css';

function App() {
  const todoData = [
    {
      label: 'Drink Coffe and eating',
      important: false,
      id: 1,
    },
    {
      label: 'Make awesome App',
      important: true,
      id: 2,
    },
    {
      label: 'Have a lunch',
      important: false,
      id: 3,
    }
  ];
  return (
    <div className="app-container">
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
