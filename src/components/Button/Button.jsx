import PropTypes from 'prop-types';

import { Button } from './Button.styled';
import { ButtonWrapper } from './Button.styled';

export const LoadMoreBtn = ({ title, onClick }) => {
  return (
    <ButtonWrapper>
      <Button onClick={onClick}>{title}</Button>
    </ButtonWrapper>
  );
};

LoadMoreBtn.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
