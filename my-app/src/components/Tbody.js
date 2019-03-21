import React, { Component } from 'react';
import '../App.css';
import TR from './TR.js';


class Tbody extends Component {
  render() {
    //console.log(this.props.media);
    return (<tbody>{this.props.media.map((card) => (
        <TR key={card.file_id} card={card.data}/>
    ))}</tbody>);
  }
}

export default Tbody;
