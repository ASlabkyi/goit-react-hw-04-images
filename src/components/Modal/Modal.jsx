import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { OverlayStyle, ModalStyle } from './Modal.styled';

export const Modal = ({ image, closeModal }) => {
  const handleBackground = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handlePressKey = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handlePressKey);

    return () => {
      window.removeEventListener('keydown', handlePressKey);
    };
  });

  return (
    <OverlayStyle onClick={handleBackground}>
      <ModalStyle>
        <img src={image} alt="" />
      </ModalStyle>
    </OverlayStyle>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
