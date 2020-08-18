import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as actions from './actions/actions';
import styles from './index.module.scss';

import App from './components/app/app';
import reducer from './store/root-reducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, enhancer);
const { dispatch } = store;

dispatch(actions.fetchData());
const Index = () => {
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
