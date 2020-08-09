import React, { useState } from 'react';
import styles from './tabs.module.scss';

const classNames = require('classnames');

const Tabs = (props) => {
  const firstTabClasses = classNames(styles.tabs__button, styles.button__cheap, styles.button__selected);
  const secondTabClasses = classNames(styles.tabs__button, styles.button__fast);
  return (
    <div className={styles.tabs__container}>
      <button className={firstTabClasses} type="button">
        Самый дешевый
      </button>
      <button className={secondTabClasses} type="button">
        Самый быстрый
      </button>
    </div>
  );
};

export default Tabs;
