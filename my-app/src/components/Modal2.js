import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PropTypes from 'prop-types';


export class Modal2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;

    return (
        <div>
          <button type="button" onClick={() => this.setState({ isOpen: true })}>
            View
          </button>

          {isOpen && (
              <Lightbox
                  mainSrc={'http://media.mw.metropolia.fi/wbma/uploads/' + this.props.card.filename}
                  onCloseRequest={() => this.setState({ isOpen: false })}
              />
          )}
        </div>
    );
  }
}

Modal2.propTypes = {
  card: PropTypes.object
};

export default Modal2