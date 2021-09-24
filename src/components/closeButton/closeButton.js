import React from 'react';
import PropTypes from 'prop-types';

import styles from './closeButton.module.scss';

function CloseButton(props) {
  const {onClick} = props;

  return (
    <button className={styles.closeButton} onClick={onClick}>
      <span/>
    </button>
  );
}

CloseButton.defaultProps = {
  onClick: () => {}
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseButton;
