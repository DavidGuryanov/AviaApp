import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as actions from './services/actions';
import styles from './index.module.scss';

import App from './components/app/app';
import reducer from './services/reducer';

const store = createStore(reducer);
// const sortDispatch = () =>

const Index = () => {
  // console.log(store.getState());
  // store.dispatch(actions.sortCheap());
  // // console.log(actions.sort);
  // console.log(store.getState());
  // store.dispatch(actions.transferAll());
  // console.log(store.getState());
  return (
    <div className={styles.index}>
      <App />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
