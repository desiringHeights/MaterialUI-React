import React from 'react';
import PropTypes from 'prop-types';

import styles from './card.module.scss';

function Card(props) {
  const {title, header, image, footer} = props;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {image && image}
      </div>
      <div className={styles.header}>
        {title && <h2>{title}</h2>}
        {header && header}
      </div>
      <div className={styles.footer}>
        {footer && footer}
      </div>
    </div>
  );
}

Card.defaultProps = {
  title: '',
  header: '',
  image: '',
  footer: '',
};

Card.propTypes = {
  title: PropTypes.string,
  header: PropTypes.element,
  image: PropTypes.element,
  footer: PropTypes.element,
};

export default Card;
