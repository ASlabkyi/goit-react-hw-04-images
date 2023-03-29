import { Component } from 'react';
import PropTypes from 'prop-types';

import { OverlayStyle, ModalStyle } from './Modal.styled';

export class Modal extends Component {
  handleBackground = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handlePressKey = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressKey);
  }

  render() {
    return (
      <OverlayStyle onClick={this.handleBackground}>
        <ModalStyle>
          <img src={this.props.image} alt="" />
        </ModalStyle>
      </OverlayStyle>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
