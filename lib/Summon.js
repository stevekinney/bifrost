import React, { useEffect, Fragment } from 'react';
import { parse } from 'url';

const host = new RegExp(location.host);

const hasSameHost = (url) => {
  return host.test(url);
};

export const summon = () => {
  document.body.addEventListener('click', (event) => {
    const href = event.target.href;
    if (!href) return;

    if (event.target && event.target.nodeName == 'A') {
      event.preventDefault();

      const local = hasSameHost(href);
      const destination = local ? parse(href).pathname : href;

      parent.postMessage({
        type: 'twilio-console-navigation-change',
        destination,
        local,
      });

      return false;
    }
  });
};

export const Summon = ({ children }) => {
  useEffect(summon);
  return <Fragment>{children}</Fragment>;
};
