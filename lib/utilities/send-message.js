export const BIFROST_MESSAGE = 'twilio-console-navigation-change';

// TODO: need to add an argument for targetOrigin
//       https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
const sendMessage = (target, message) => {
  target.postMessage({
    type: BIFROST_MESSAGE,
    ...message,
  });
};

export default sendMessage;
