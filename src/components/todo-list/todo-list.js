import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

  return (
    <ul className="list-group todo-list">
      {todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <li key={id} className="list-group-item"><TodoListItem {...itemProps} /></li>
        )
      })}
    </ul>
  )
}

export default TodoList;