import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

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
        const { type, destination, local, replace } = event.data;
        console.log(event.data);

        if (type === BIFROST_MESSAGE) {
          if (local) {
            replace ? history.replace(destination) : history.push(destination);
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
