import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Summon } from 'bifrost';

const Application = () => (
  <Router>
    <main>
      <h1>Twilio Email</h1>
      <ul>
        <li>
          <a href="/email">Email</a>
        </li>
        <li>
          <a href="/flex">Flex</a>
        </li>
        <li>
          <a href="/voice">Voice</a>
        </li>
        <li>
          <a href="/messaging">Messaging</a>
        </li>
        <li>
          <a href="https://google.com">Google (External Link)</a>
        </li>
        <li>
          <Link to="/email/internal">Internal</Link>
        </li>
      </ul>
      <Route path="/email/internal">
        <h2>Internal</h2>
        <p>Internal Linking Works</p>
      </Route>
    </main>
  </Router>
);

render(
  <Summon>
    <Application />
  </Summon>,
  document.getElementById('root'),
);
