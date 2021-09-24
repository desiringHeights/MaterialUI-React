import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './sliderPaginationMobile.module.scss';

function SliderPaginationMobile(props) {
  const {items, index, slideTo} = props;
  const toggleClick = (i) => () => slideTo(i);
  const renderContent = () => {
    return items.map((text, i) => <li key={i}><button className={cx(styles.button, index === i && styles.active)} alt={text} onClick={toggleClick(i)}/></li>)
  };

  return (
    <ul className={styles.paginationMobile}>
      {renderContent()}
    </ul>
  );
}

SliderPaginationMobile.propTypes = {
  slideTo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderPaginationMobile;
