import React, { Component } from 'react';
import '../App.css';
import TR from './TR.js';

class Tbody2 extends Component {
  render() {
    console.log(this.props.catcards);
    return this.props.catcards.map((card) => (
        <TR key={card.id} card={card}/>
    ));
  }
}

export default Tbody2;