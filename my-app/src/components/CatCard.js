import React, { Component } from 'react';
import '../App.css';

class CatCard extends Component {
  render() {
    console.log(this.props.catcards);
    return this.props.catcards.map((card) => (
       <h3>{catcards.title}</h3>
    ));
  }
}

export default CatCard;
