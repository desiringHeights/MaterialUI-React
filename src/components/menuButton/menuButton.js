import React from 'react';
import PropTypes from 'prop-types';

import styles from './menuButton.module.scss';

function MenuButton(props) {
  const {onClick} = props;

  return (
    <button className={styles.menuButton} onClick={onClick}>
      <span/>
    </button>
  );
}

MenuButton.defaultProps = {
  onClick: () => {}
};

MenuButton.propTypes = {
  onClick: PropTypes.func,
};

export default MenuButton;
