import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import Logo from '../logo/logo';
import Social from '../social/social';

import styles from './footer.module.scss';

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={cx(styles.footerLeft, styles.footerHide)}>
          <Link to='/' className={styles.footerLogo}>
            <Logo/>
          </Link>
          <Social/>
        </div>
        <nav>
          <ul className={styles.footerMenu}>
            <li>
              <Link to='/' className={styles.menuLink}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to='/'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/'>
                GDPR
              </Link>
            </li>
            <li className={styles.mobileHide}>
              <Link to='/'>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
