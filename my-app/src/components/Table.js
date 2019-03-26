import React, { Component } from 'react';
import '../App.css';
import Tbody from './Tbody.js';
import axios from 'axios';
import PropTypes from 'prop-types';


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

Table.propTypes = {
  media: PropTypes.array
};

export default Table;