import React, { useState } from 'react';
import styles from './ticket.module.scss';

const s7Logo = require('./S7_Logo.png');

const Ticket = (props) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <h4 className={styles.header__price}>13 400 P</h4>
        <img src={s7Logo} alt="s7 logo" className={styles.header__company} />
      </div>
      <div className={styles.route_info}>
        <div className={styles.route_direction}>
          <h5 className={styles.info_header}>MOW - HKT</h5>
          <p className={styles.info_description}> 10:45 - 08:00</p>
        </div>
        <div className={styles.route_duration}>
          <h5 className={styles.info_header}>В пути</h5>
          <p className={styles.info_description}> 21ч 15м</p>
        </div>
        <div className={styles.route_transfer}>
          <h5 className={styles.info_header}>2 пересадки</h5>
          <p className={styles.info_description}>HKG, JNB</p>
        </div>
      </div>
      <div className={styles.route_info}>
        <div className={styles.route_direction}>
          <h5 className={styles.info_header}>MOW - HKT</h5>
          <p className={styles.info_description}> 10:45 - 08:00</p>
        </div>
        <div className={styles.route_duration}>
          <h5 className={styles.info_header}>В пути</h5>
          <p className={styles.info_description}> 21ч 15м</p>
        </div>
        <div className={styles.route_transfer}>
          <h5 className={styles.info_header}>2 пересадки</h5>
          <p className={styles.info_description}>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
