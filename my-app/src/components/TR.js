import React, {Component} from 'react'

export class TR extends Component {
  render() {
    return (
        <tr>
          <td>
            <img src={this.props.card.thumbnails.w160} alt="Title"/>
          </td>
          <td>
            <h3>{this.props.card.title}</h3>
            <p>{this.props.card.description}</p>
          </td>
          <td>
            <a href={this.props.card.filename} target="_blank">View</a>
          </td>
        </tr>
    )
  }
}

export default TR