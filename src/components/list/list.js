import React from 'react';
import PropTypes from 'prop-types';

import styles from './list.module.scss';

function List(props) {
  const {children} = props;

  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
}

List.defaultProps = {
  onClick: () => {}
};

List.propTypes = {
  children: PropTypes.array.isRequired
};

export default List;
