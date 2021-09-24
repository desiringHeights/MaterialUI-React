import React from 'react';

import IconFacebook from '../../assets/images/icons/icon-facebook-messenger.svg';
import IconInstagram from '../../assets/images/icons/icon-instagram.svg';
import IconTwitter from '../../assets/images/icons/icon-twitter.svg';
import styles from './social.module.scss';

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a href="#instagram">
          <img src={IconInstagram} alt="Instagram Link" />
        </a>
      </li>
      <li>
        <a href="#twitter">
          <img src={IconTwitter} alt="Twitter Link" />
        </a>
      </li>
      <li>
        <a href="#facebook">
          <img src={IconFacebook} alt="Facebook Messenger Link" />
        </a>
      </li>
    </ul>
  );
}

export default Social;
