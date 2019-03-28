import React, {Component} from 'react'
import '../App.css';
import IMG from './IMG.js';
import PropTypes from 'prop-types';
import Modal2 from './Modal2';

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
            <Modal2 key={this.props.card.file_id} card={this.props.card}/>
          </td>
        </tr>
    )
  }
}

TR.propTypes = {
  card: PropTypes.object
};

export default TR