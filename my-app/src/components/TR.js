import React, {Component} from 'react'
import '../App.css';
import IMG from './IMG.js';

export class TR extends Component {
  render() {
    //console.log(this.props.card);
    return (
        <tr>
          <td>
            <IMG key={this.props.card.file_id} card={this.props.card}/>
          </td>
          <td>
            <h3>{this.props.card.title}</h3>
            <p>{this.props.card.description}</p>
          </td>
          <td>
            <p>{ this.props.card.time_added }</p>
          </td>
        </tr>
    )
  }
}

export default TR