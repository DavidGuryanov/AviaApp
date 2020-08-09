import React, { useState } from 'react';
import styles from './ticketsList.module.scss';
import Ticket from '../ticket/ticket';

const TicketsList = (props) => {
  return (
    <div className={styles.test}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketsList;
