export const BIFROST_MESSAGE = 'twilio-console-navigation-change';

const sendMessage = (target, message) => {
  target.postMessage({
    type: BIFROST_MESSAGE,
    ...message,
  });
};

export default sendMessage;
