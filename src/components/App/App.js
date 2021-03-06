import React from 'react';
import styles from './App.scss';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import { BrowserRouter, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import { AnimatedSwitch } from 'react-router-transition';
import List from '../List/ListContainer';
import SearchResult from '../SearchResults/SearchResultsContainer';

const App = () => (
  <div>
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={Info} />
          <Route exact path='/FAQ' component={FAQ} />
          <Route exact path="/list/:id" component={List} />
          <Route exact path="/Search/:id" component={SearchResult} />
        </AnimatedSwitch >
      </MainLayout>
    </BrowserRouter>
  </div>
);

export default App;
