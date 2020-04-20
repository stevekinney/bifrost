import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Bifrost, Realm } from 'bifrost';

import Navigation from './Navigation';

import './style.css';

const Application = () => {
  return (
    <Router>
      <Bifrost>
        <main className="container">
          <section className="top-bar" />
          <Navigation />
          <Realm className="sub-application" />
        </main>
      </Bifrost>
    </Router>
  );
};

render(<Application />, document.getElementById('root'));
