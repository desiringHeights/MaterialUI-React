import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import CloseButton from '../closeButton/closeButton';

import globals from '../../globals';
import styles from './menu.module.scss';

function Menu(props) {
  const { path } = props;
  const {isMenuShown, toggleMenu} = props;

  return (
    <div className={cx(styles.menuWrapper, isMenuShown && styles.menuWrapperShown)}>
      <CloseButton onClick={toggleMenu}/>

      <ul className={styles.menu}>
        <li className={path === '/' ? styles.menuActive : ''}>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className={path === globals.SMP_PATH ? styles.menuActive : ''}>
          <Link to={globals.SMP_PATH}>
            Social Media Platforms
          </Link>
        </li>
        <li className={path === globals.MC_PATH ? styles.menuActive : ''}>
          <Link to={globals.MC_PATH}>
            Marketing Campaigns
          </Link>
        </li>
        <li className={path === globals.FAQ_PATH ? styles.menuActive : ''}>
          <Link to={globals.FAQ_PATH}>
            FAQ's
          </Link>
        </li>
        <li className={path === globals.ABOUT_PATH ? styles.menuActive : ''}>
          <Link to={globals.ABOUT_PATH}>
            VerbyoApp
          </Link>
        </li>
        <li>
          <Link to='/'>
            Log In
          </Link>
        </li>
        <li>
          <Link to='/'>
            Sign Up
          </Link>
        </li>
      </ul>
      <ul className={styles.menuBottom}>
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
        <li>
          <Link to='/'>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  isMenuShown: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
