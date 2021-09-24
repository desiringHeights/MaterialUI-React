import React from 'react';

import ImageRetina from '../ImageRetina';
import Logo1x from '../../assets/images/logo.png';
import Logo2x from '../../assets/images/logo@2x.png';
import styles from './logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <ImageRetina img1x={Logo1x} img2x={Logo2x} alt='Verbyo Business Logo'  />
    </div>
  );
};
