import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {

  return (
    <ul className="list-group todo-list">
      {todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <li key={id} className="list-group-item">
            <TodoListItem 
              {...itemProps}
              onDeleted={() => onDeleted(id)} 
              onToggleDone={() => onToggleDone(id)}
              onToggleImportant={() => onToggleImportant(id)}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList;