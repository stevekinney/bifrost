import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { NavUrl } from './NavUrl';
import { BIFROST_MESSAGE } from './utilities/send-message';

// Microsoft Internet Explorer could potentially still be
// a thing that people could potentially use.
const eventMethod = window.addEventListener
  ? 'addEventListener'
  : 'attachEvent';

const addEventListener = window[eventMethod];
const messageEvent = eventMethod == 'attachEvent' ? 'onmessage' : 'message';

export const Bifrost = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    addEventListener(
      messageEvent,
      (event) => {
        const { type, destination, local, consoleApp, parentOnly, replace } = event.data;

        if (type === BIFROST_MESSAGE) {
          if (local) {
            const newUrl = NavUrl({ url: destination, consoleApp, parentOnly });
            replace ? history.replace(newUrl) : history.push(newUrl);
          } else {
            window.location = destination;
          }
        }
      },
      false,
    );
  }, []);

  return <Fragment>{children}</Fragment>;
};
