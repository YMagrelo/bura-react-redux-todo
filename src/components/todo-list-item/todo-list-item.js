import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

  render() {
    const { 
      label, 
      onDeleted, 
      onToggleDone, 
      onToggleImportant, 
      done, 
      important 
    } = this.props;
  
    let classNames = 'todo-list-item';

    if(done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important';
    }


    return (
      <div className={classNames}>

        <div
          className="todo-list-item-label"
          onClick={onToggleDone}
        >
          {label}
        </div>

        <div className="todo-list-item-btn-block">
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
            <i className="fa fa-trash-o" />
          </button>
          <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </div>
    )
  }
}
