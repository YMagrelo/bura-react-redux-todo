import React, { Component } from 'react';
import './todo-list-item.css'

export default class TodoListItem extends Component {
    

    constructor() {
        super();

        this.onLabelClick = () => {
            console.log(`${this.props.label} is done`);
        }
    }

    render() {

        const { label, important = false } = this.props;
        const style = {
            color: important ? 'tomato' : 'black'
        }
    
        return (
            <div className="todo-list-item">

                <div 
                  style={style} 
                  className="todo-list-item-label"
                  onClick={this.onLabelClick}
                >
                  {label}
                </div>

                <div className="todo-list-item-btn-block">
                  <button type="button" className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                  </button>
                  <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                  </button>
                </div>
            </div>
        )
    }
}
