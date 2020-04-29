import React, { useEffect, Fragment } from 'react';
import { parse } from 'url';

import hasSameHost from './utilities/has-same-host';
import sendMessage from './utilities/send-message';

// TODO: we'll want a way to control replace vs push state with sendMessage
//       for the POC the handler already knows how to call the right
//       history.push|replace (default push)
export const summon = () => {
  document.body.addEventListener('click', (event) => {
    const href = event.target && event.target.href;
    if (!href) return;

    if (event.target && event.target.nodeName == 'A') {
      event.preventDefault();

      const { pathname } = parse(href);

      const local = hasSameHost(href);
      const destination = local ? pathname : href;

      sendMessage(parent, { destination, local });

      return false;
    }
  });
};

export const Summon = ({ children }) => {
  useEffect(summon, []);
  return <Fragment>{children}</Fragment>;
};
