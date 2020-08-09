import React from 'react';
import styles from './app.module.scss';

import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Tabs from '../tabs/tabs';
import TicketsList from '../tickets-list/ticketsList';

const App = () => {
  return (
    <div className={styles.app__container}>
      <Header />
      <Sidebar />
      <Tabs />
      <TicketsList />
    </div>
  );
};

export default App;
