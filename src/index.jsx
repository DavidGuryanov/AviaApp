import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as actions from './services/actions';
import styles from './index.module.scss';

import App from './components/app/app';
import reducer from './services/reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, enhancer);
const { dispatch, getState, subscribe } = store;

dispatch(actions.fetchData());
const Index = () => {
  return (
    <div className={styles.index}>
      <App />
      <button onClick={(e) => dispatch(actions.fetchID())}>ID</button>
      <button onClick={() => dispatch(actions.fetchTickets(store.getState().getTickets.id))}>FETCH TICKETS</button>
      <button onClick={() => dispatch(actions.fetchData())}>FETCH</button>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
