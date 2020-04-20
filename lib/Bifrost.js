import React, { useEffect, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

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
      function (event) {
        const { type, destination, local } = event.data;

        if (type === 'twilio-console-navigation-change') {
          if (local) {
            history.push(destination);
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
