import { RotatingLines } from 'react-loader-spinner';

import { LoaderWrpper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrpper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderWrpper>
  );
};
