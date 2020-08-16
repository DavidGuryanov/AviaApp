import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spin, Result } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from './sidebar.module.scss';
import * as actions from '../../services/actions';
import './antd.css';

const Sidebar = (props) => {
  const {
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
    isFetching,
  } = props;
  const loading = isFetching.isFetching;
  const { error } = isFetching;
  const { all, none, one, two, three } = passedState.transfer;
  const bar = (
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
  const antIcon = <LoadingOutlined style={{ fontSize: 150 }} spin />;
  if (loading) {
    return (
      <div className={styles.test}>
        {bar}

        <Spin indicator={antIcon} size="large" style={{ color: '#2196f3' }} />
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.test}>
        {bar}
        <Result status="error" title="Oops. An Error occured" subTitle="Try reloading the page." />
      </div>
    );
  }

  return <div className={styles.test}>{bar}</div>;
};

const mapStateToProps = (state) => {
  return {
    isFetching: { ...state.getTickets },
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

Sidebar.propTypes = {
  isFetching: PropTypes.shape({
    isFetching: PropTypes.bool,
    id: PropTypes.string,
    tickets: PropTypes.arrayOf(PropTypes.object),
    stop: PropTypes.bool,
    error: PropTypes.bool,
  }).isRequired,
  passedState: PropTypes.shape({
    sort: PropTypes.string,
    transfer: PropTypes.shape({
      all: PropTypes.bool,
      none: PropTypes.bool,
      one: PropTypes.bool,
      two: PropTypes.bool,
      three: PropTypes.bool,
    }),
  }),
  transferAll: PropTypes.func,
  transferAllRemove: PropTypes.func,
  transferNone: PropTypes.func,
  transferNoneRemove: PropTypes.func,
  transferOne: PropTypes.func,
  transferOneRemove: PropTypes.func,
  transferTwo: PropTypes.func,
  transferTwoRemove: PropTypes.func,
  transferThree: PropTypes.func,
  transferThreeRemove: PropTypes.func,
};

Sidebar.defaultProps = {
  passedState: {
    sort: 'cheap',
    transfer: { all: true, none: true, one: true, two: true, three: true },
  },
  transferAll: () => {},
  transferAllRemove: () => {},
  transferNone: () => {},
  transferNoneRemove: () => {},
  transferOne: () => {},
  transferOneRemove: () => {},
  transferTwo: () => {},
  transferTwoRemove: () => {},
  transferThree: () => {},
  transferThreeRemove: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
