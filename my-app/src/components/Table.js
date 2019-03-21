import React, { Component } from 'react';
import '../App.css';
import Tbody from './Tbody.js';

class Table extends Component {
  render() {
    console.log(this.props.catcards);
    return (
        <table>
        <Tbody catcards={this.props.catcards}/>
        </table>
    )
  }
}

export default Table;