import React, { Component } from 'react';
import '../App.css';
import TR from './TR.js';

class CatCard extends Component {
  render() {
    console.log(this.props.catcards);
    return this.props.catcards.map((card) => (
       <TR card={card}/>
    ));
  }
}

export default CatCard;
