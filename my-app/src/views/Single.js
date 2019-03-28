import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getSingleMedia} from '../utils/MediaAPI.js';

class Single extends Component {
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  state = {
    file: {
      filename: '',
      title: 'testi',
    },
  };

  componentDidMount() {
    getSingleMedia(this.props.location.state.file).then(res => {
      //console.log(res);
      this.setState({file:{ filename: res.data.filename, title: res.data.title}});
    });
  }

  render() {
    //console.log(this.props.location.state.file);
    return (
        <React.Fragment>
          <h1>{this.state.file.title}</h1>
          <img src={this.mediaUrl + this.state.file.filename}
               alt={this.state.file.title}/>
        </React.Fragment>
    );
  }
}

Single.propTypes = {
  match: PropTypes.object,
  location: PropTypes.string,
};

export default Single;