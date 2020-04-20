import React from 'react';
import { render } from 'react-dom';
import { Summon } from 'bifrost';

const Application = () => (
  <main>
    <h1>Voice</h1>
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
    </ul>
  </main>
);

render(
  <Summon>
    <Application />
  </Summon>,
  document.getElementById('root'),
);
