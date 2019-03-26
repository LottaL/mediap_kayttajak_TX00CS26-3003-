import React, {Component} from 'react'
import PropTypes from 'prop-types';

export class IMG extends Component {


  render() {
    //console.log(`http://media.mw.metropolia.fi/wbma/uploads/${this.state.thumbnails.w160}`);
    return (
        <img src={"http://media.mw.metropolia.fi/wbma/uploads/" + this.props.card.thumbnails.w160}/>
    )
  }
}

IMG.propTypes = {
  card: PropTypes.object
};

export default IMG