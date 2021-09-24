import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {onClick, text} = props;

  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default Button;
