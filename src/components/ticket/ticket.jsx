import React, { useState } from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

import styles from './ticket.module.scss';

const { listTimeZones } = require('timezone-support');
const { parseFromTimeZone, formatToTimeZone } = require('date-fns-timezone');
const s7Logo = require('./S7_Logo.png');

const Ticket = (props) => {
  const { ticket } = props;
  const { price, carrier, segments } = ticket;
  function numberWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  const firstSegment = segments[0];
  const secondSegment = segments[1];

  const duration = (min) => {
    const hours = Math.floor(min / 60);
    let minutes = min - hours * 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}ч ${minutes}м`;
  };
  const formatStops = (stops) => {
    const res = stops
      .map((value, i) => {
        if (i > 0) {
          return ` ${value}`;
        }
        return value;
      })
      .toString();
    return res;
  };

  const getInterval = (startTime, minutes) => {
    const format = 'HH:mm';
    const startDate = new Date(startTime);
    const startDateUtc = formatToTimeZone(startDate, format, { timeZone: 'Etc/UTC' });
    const finishDate = new Date(+startDate + minutes * 60000);
    const finishDateUtc = formatToTimeZone(finishDate, format, { timeZone: 'Etc/UTC' });
    return `${startDateUtc} - ${finishDateUtc}`;
    // const test = format(utc, 'HH:mm');
    // console.log(test);
  };
  // console.log(listTimeZones());
  // const startDate = new Date(firstSegment.date);
  // console.log(startDate.toUTCString());
  getInterval(firstSegment.date, firstSegment.duration);
  // console.log(test);

  const formatNumberOfStops = (arr) => {
    switch (arr.length) {
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
      case 0:
        return 'Без пересадок';
      default:
        return null;
    }
  };

  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <h4 className={styles.header__price}>{numberWithSpaces(price)} Р</h4>
        <img src={s7Logo} alt="s7 logo" className={styles.header__company} />
      </div>
      <div className={styles.route_info}>
        <div className={styles.route_direction}>
          <h5 className={styles.info_header}>
            {firstSegment.origin} - {firstSegment.destination}
          </h5>
          <p className={styles.info_description}>{getInterval(firstSegment.date, firstSegment.duration)}</p>
        </div>
        <div className={styles.route_duration}>
          <h5 className={styles.info_header}>В пути</h5>
          <p className={styles.info_description}>{duration(firstSegment.duration)}</p>
        </div>
        <div className={styles.route_transfer}>
          <h5 className={styles.info_header}>{formatNumberOfStops(firstSegment.stops)}</h5>
          <p className={styles.info_description}>{formatStops(firstSegment.stops)}</p>
        </div>
      </div>
      <div className={styles.route_info}>
        <div className={styles.route_direction}>
          <h5 className={styles.info_header}>
            {' '}
            {secondSegment.origin} - {secondSegment.destination}
          </h5>
          <p className={styles.info_description}>{getInterval(secondSegment.date, secondSegment.duration)}</p>
        </div>
        <div className={styles.route_duration}>
          <h5 className={styles.info_header}>В пути</h5>
          <p className={styles.info_description}>{duration(secondSegment.duration)}</p>
        </div>
        <div className={styles.route_transfer}>
          <h5 className={styles.info_header}>{formatNumberOfStops(secondSegment.stops)}</h5>
          <p className={styles.info_description}>{formatStops(secondSegment.stops)}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
