import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';

import App from './components/app/app';

const Index = () => {
  return (
    <div className={styles.index}>
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
