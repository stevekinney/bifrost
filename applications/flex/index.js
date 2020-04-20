import React from 'react';
import { render } from 'react-dom';
import { Summon } from 'bifrost';

const Application = () => <h1>Flex</h1>;

render(
  <Summon>
    <Application />
  </Summon>,
  document.getElementById('root'),
);
