import React from 'react';
import styles from './header.module.scss';

const logo = require('./Logo.svg');

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" className={styles.header__logo} />
    </div>
  );
};

export default Header;
