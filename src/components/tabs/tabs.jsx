import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './tabs.module.scss';
import * as actions from '../../services/actions';

const classNames = require('classnames/bind');

const bindedClasses = classNames.bind(styles);

const Tabs = ({ passedState, sortCheap, sortFast, transferAll }) => {
  const firstTabClasses = bindedClasses({
    tabs__button: true,
    button__cheap: true,
    button__selected: passedState.sort === 'cheap',
  });
  const secondTabClasses = bindedClasses({
    tabs__button: true,
    button__fast: true,
    button__selected: passedState.sort === 'fast',
  });

  return (
    <div className={styles.tabs__container}>
      <button className={firstTabClasses} type="button" onClick={sortCheap}>
        Самый дешевый
      </button>
      <button className={secondTabClasses} type="button" onClick={sortFast}>
        Самый быстрый
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    passedState: { ...state.sort, ...state.filter },
  };
};
const mapDispatchToProps = (dispatch) => {
  const { sortCheap, sortFast, transferAll } = bindActionCreators(actions, dispatch);
  return {
    sortCheap,
    sortFast,
    transferAll,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
