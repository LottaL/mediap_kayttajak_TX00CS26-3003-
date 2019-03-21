import React, { Component } from 'react';
import '../App.css';
import Tbody from './Tbody.js';
import axios from 'axios';
class Table extends Component {

  render() {
    //console.log(this.props.media);
    return (
        <table>
        <Tbody media={this.props.media}/>
        </table>
    )
  }
}

export default Table;