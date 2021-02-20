import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState((prevState) => {
      return {
        done: !prevState.done,
      }
    })
  }

  onMarkImportant = () => {
    this.setState((prevState) => {
      return {
        important: !prevState.important,
      }
    })
  }

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
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
          onClick={this.onLabelClick}
        >
          {label}
        </div>

        <div className="todo-list-item-btn-block">
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleted}>
            <i className="fa fa-trash-o" />
          </button>
          <button type="button" className="btn btn-outline-success btn-sm" onClick={this.onMarkImportant}>
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </div>
    )
  }
}
