import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ticketsList.module.scss';
import Ticket from '../ticket/ticket';

const TicketsList = (props) => {
  const { tickets, sort, transfer } = props;
  // const { transfer } = filter;
  const { none, one, two, three } = transfer;

  const [num, setNum] = useState(10);

  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = () => {};
  }

  const showMore = () => {
    disableScroll();
    setNum(num + 10);
    setTimeout(enableScroll, 100);
  };

  const btn = (
    <button type="button" onClick={showMore} className={styles.show_more}>
      Show More
    </button>
  );

  function comparePrice(first, second) {
    if (first.price < second.price) {
      return -1;
    }
    if (first.price > second.price) {
      return 1;
    }
    return 0;
  }
  function compareDuration(first, second) {
    if (
      first.segments[0].duration + first.segments[1].duration <
      second.segments[0].duration + second.segments[1].duration
    ) {
      return -1;
    }
    if (
      first.segments[0].duration + first.segments[1].duration >
      second.segments[0].duration + second.segments[1].duration
    ) {
      return 1;
    }
    return 0;
  }
  const ticketsToShow = Object.values(tickets);

  let arr;
  if (sort === 'cheap') {
    arr = ticketsToShow
      .sort(comparePrice)
      .filter((el) => {
        if (one && el.segments[0].stops.length <= 1 && el.segments[1].stops.length <= 1) {
          return true;
        }
        if (two && el.segments[0].stops.length <= 2 && el.segments[1].stops.length <= 2) {
          return true;
        }
        if (three && el.segments[0].stops.length <= 3 && el.segments[1].stops.length <= 3) {
          return true;
        }
        if (none && el.segments[0].stops.length === 0 && el.segments[1].stops.length === 0) {
          return true;
        }
        return false;
      })
      .slice(0, num);
  } else {
    arr = ticketsToShow
      .sort(compareDuration)
      .filter((el) => {
        let oneN;
        let twoN;
        let threeN;
        let noneN;
        if (one) {
          oneN = 1;
        }
        if (two) {
          twoN = 2;
        }
        if (three) {
          threeN = 3;
        }
        if (none) {
          noneN = 0;
        }
        if (
          el.segments[0].stops.length === oneN ||
          el.segments[0].stops.length === twoN ||
          el.segments[0].stops.length === threeN ||
          el.segments[0].stops.length === noneN
        ) {
          return true;
        }
        return false;
      })
      .slice(0, num);
  }
  let count = 0;
  const show = arr.map((value) => {
    count += 1;
    return <Ticket ticket={value} key={count} />;
  });
  if (arr.length > 1) {
    return (
      <div className={styles.test}>
        {show}
        {btn}
      </div>
    );
  }
  if (arr.length === 0) {
    return (
      <div className={styles.test}>
        <div className={styles.notfound_container}>
          <p className={styles.notfound_message}>Рейсов, подходящих под заданные фильтры, не найдено</p>
        </div>
      </div>
    );
  }
  return <div className={styles.test}>{show}</div>;
};

const mapStateToProps = (state) => {
  return {
    tickets: { ...state.reducerGetTickets.tickets },
    sort: state.reducerSort.sort,
    transfer: state.reducerFilter.transfer,
  };
};

TicketsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tickets: PropTypes.object,
  sort: PropTypes.string,
  transfer: PropTypes.shape({
    all: PropTypes.bool,
    none: PropTypes.bool,
    one: PropTypes.bool,
    two: PropTypes.bool,
    three: PropTypes.bool,
  }),
};

TicketsList.defaultProps = {
  tickets: {},
  sort: 'cheap',
  transfer: { all: false, none: true, one: false, two: false, three: false },
};

export default connect(mapStateToProps)(TicketsList);
