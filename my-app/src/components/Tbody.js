import React, { Component } from 'react';
import '../App.css';
import TR from './TR.js';
import PropTypes from 'prop-types';

class Tbody extends Component {
  render() {
    //console.log(this.props.media);
    return (<tbody>{this.props.media.map((card) => (
        <TR key={card.data.file_id} card={card.data}/>
    ))}</tbody>);
  }
}

Tbody.propTypes = {
  media: PropTypes.array
};

export default Tbody;
