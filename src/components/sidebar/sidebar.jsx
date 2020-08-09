import React, { useState } from 'react';
import styles from './sidebar.module.scss';

const Sidebar = (props) => {
  return (
    <div className={styles.filter__container}>
      <h3 className={styles.filter__header}>Количество пересадок</h3>
      <fieldset>
        <label className={styles.filter__label}>
          <input type="checkbox" className={styles.filter__checkbox} />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>Все</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input type="checkbox" className={styles.filter__checkbox} />{' '}
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>Без пересадок</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input type="checkbox" className={styles.filter__checkbox} />{' '}
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>1 пересадка</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input type="checkbox" className={styles.filter__checkbox} />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>2 пересадки</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input type="checkbox" className={styles.filter__checkbox} />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>3 пересадки</p>
          <br />
        </label>
      </fieldset>
    </div>
  );
};

export default Sidebar;
