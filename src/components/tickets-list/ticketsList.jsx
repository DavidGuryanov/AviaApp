import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './ticketsList.module.scss';
import Ticket from '../ticket/ticket';

const TicketsList = (props) => {
  const { tickets } = props;
  const { sort } = props.sort;
  const ticketsToShow = Object.values(tickets);
  // console.log(ticketsToShow);
  const firstTen = ticketsToShow.slice(0, 10);
  function compare(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  let arr;
  if (sort === 'cheap') {
    arr = firstTen.sort(compare);
  } else {
    arr = firstTen;
  }
  const show = arr.map((value) => {
    return <Ticket ticket={value} key={value.carrier + value.price} />;
  });
  return <div className={styles.test}>{show}</div>;
};

const mapStateToProps = (state) => {
  //  console.log(state);
  return {
    tickets: { ...state.getTickets.tickets },
    sort: { ...state.sort },
  };
};

export default connect(mapStateToProps)(TicketsList);
