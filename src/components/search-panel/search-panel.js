import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component  {
  state = {
    query: ''
  }

   onSearchChange = (e) => {
     const value = e.target.value;
     this.setState({
       query: value
     })
     this.props.setQuery(value)
   }

    render() {
   
      return (
        <input 
          value={this.state.query}
          onChange={this.onSearchChange}
          placeholder="Type here to search"
          className="form-control search-input" 
        /> 
      )
    }
  }
