import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './ticketsList.module.scss';
import Ticket from '../ticket/ticket';

const TicketsList = (props) => {
  const { tickets } = props;
  const ticketsToShow = Object.values(tickets).slice(0, 10);
  const show = ticketsToShow.map((value) => {
    return <Ticket ticket={value} />;
  });
  return <div className={styles.test}>{show}</div>;
};

const mapStateToProps = (state) => {
  return {
    tickets: { ...state.getTickets.tickets },
  };
};

export default connect(mapStateToProps)(TicketsList);
