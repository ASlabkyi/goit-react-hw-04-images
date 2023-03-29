import PropTypes from 'prop-types';

import {
  ImageGalleryItemStyle,
  ImageGalleryItemImageStyle,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, id, openModal }) => {
  return (
    <ImageGalleryItemStyle key={id}>
      <ImageGalleryItemImageStyle
        src={webformatURL}
        alt={tags}
        onClick={openModal}
      />
    </ImageGalleryItemStyle>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};
