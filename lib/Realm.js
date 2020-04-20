import React from 'react';
import { withRouter } from 'react-router-dom';

const getIframeDocument = (ref) => {
  const iframe = ref.current;
  if (!iframe) {
    return null;
  }
  return iframe.contentDocument || iframe.contentWindow.document;
};

export const Realm = withRouter((props) => {
  const { location, ...restProps } = props;
  if (location.pathname === '/') return null;

  const iframeRef = React.useRef();

  const route = 'applications' + location.pathname;
  return <iframe ref={iframeRef} src={route} {...restProps}></iframe>;
});
