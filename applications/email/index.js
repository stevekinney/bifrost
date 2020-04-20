import React from 'react';
import { render } from 'react-dom';
import { Summon } from 'bifrost';

const Application = () => (
  <main>
    <h1>Twilio Email</h1>
    <li>
      <a href="/flex">Go to Flex</a>
    </li>
    <li>
      <a href="https://google.com">Go to Google</a>
    </li>
  </main>
);

render(
  <Summon>
    <Application />
  </Summon>,
  document.getElementById('root'),
);
