import React from 'react';
import PropTypes from 'prop-types';

function ImageRetina(props) {
  const {img1x, img2x, alt} = props;
  return (
    <img src={img1x} srcSet={`${img1x} 1x,${img2x} 2x`} alt={alt}/>
  );
}

ImageRetina.defaultProps = {
  alt: '',
};

ImageRetina.propTypes = {
  img1x: PropTypes.string.isRequired,
  img2x: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default ImageRetina;
