import React, { Component } from 'react';
import '../App.css';
import TR from './TR.js';

class Tbody extends Component {
  render() {
    console.log(this.props.catcards);
    return (<tbody>{this.props.catcards.map((card) => (
        <TR key={card.id} card={card}/>
    ))}</tbody>);
  }
}

export default Tbody;
