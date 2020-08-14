import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './sidebar.module.scss';
import * as actions from '../../services/actions';

const Sidebar = ({
  passedState,
  transferAll,
  transferAllRemove,
  transferNone,
  transferNoneRemove,
  transferOne,
  transferOneRemove,
  transferTwo,
  transferTwoRemove,
  transferThree,
  transferThreeRemove,
}) => {
  const { all, none, one, two, three } = passedState.transfer;
  return (
    <div className={styles.filter__container}>
      <h3 className={styles.filter__header}>Количество пересадок</h3>
      <fieldset>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            className={styles.filter__checkbox}
            checked={all}
            onChange={(evt) => (evt.target.checked ? transferAll() : transferAllRemove())}
          />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>Все</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            className={styles.filter__checkbox}
            checked={none}
            onChange={(evt) => (evt.target.checked ? transferNone() : transferNoneRemove())}
          />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>Без пересадок</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            className={styles.filter__checkbox}
            checked={one}
            onChange={(evt) => (evt.target.checked ? transferOne() : transferOneRemove())}
          />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>1 пересадка</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            className={styles.filter__checkbox}
            checked={two}
            onChange={(evt) => (evt.target.checked ? transferTwo() : transferTwoRemove())}
          />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>2 пересадки</p>
          <br />
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            className={styles.filter__checkbox}
            checked={three}
            onChange={(evt) => (evt.target.checked ? transferThree() : transferThreeRemove())}
          />
          <span className={styles.filter__custom_checkbox} />
          <p className={styles.filter__input_text}>3 пересадки</p>
          <br />
        </label>
      </fieldset>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    passedState: { ...state.sort, ...state.filter },
  };
};
const mapDispatchToProps = (dispatch) => {
  const {
    sortCheap,
    sortFast,
    transferAll,
    transferAllRemove,
    transferNone,
    transferNoneRemove,
    transferOne,
    transferOneRemove,
    transferTwo,
    transferTwoRemove,
    transferThree,
    transferThreeRemove,
  } = bindActionCreators(actions, dispatch);
  return {
    sortCheap,
    sortFast,
    transferAll,
    transferAllRemove,
    transferNone,
    transferNoneRemove,
    transferOne,
    transferOneRemove,
    transferTwo,
    transferTwoRemove,
    transferThree,
    transferThreeRemove,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
