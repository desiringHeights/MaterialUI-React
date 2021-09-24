import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Logo from '../logo/logo';
import Menu from '../menu/menu';
import MenuButton from '../menuButton/menuButton';

import styles from './header.module.scss';

const Header = (props) => {
  const { location } = props;
  const path = location.pathname;
  const [menuShown, setMenuShown] = useState(false);

  useEffect(() => {
    closeMenu();
  }, [path]);


  const html = document.documentElement;
  const body = document.body;

  const showMenu = () => {
    setMenuShown(true);
    body.setAttribute('style', 'overflow-y: hidden');
    html.setAttribute('style', 'overflow-y: hidden');
  };

  const closeMenu = () => {
    setMenuShown(false);
    body.setAttribute('style', 'overflow-y: initial');
    html.setAttribute('style', 'overflow-y: initial');
  };

  return (
    <header className={styles.headerWrapper}>
      <nav className={styles.header}>
        <MenuButton onClick={showMenu}/>

        <Link to='/' className={styles.headerLogo}>
          <Logo/>
        </Link>

        <Menu isMenuShown={menuShown} toggleMenu={closeMenu} path={path} />

      </nav>
    </header>
  )
};

export default withRouter(Header);
