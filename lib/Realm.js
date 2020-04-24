import React from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';

import applications from './applications';
import resolve from './utilities/resolve-pathname';

const getIframeDocument = (ref) => {
  const iframe = ref.current;
  if (!iframe) {
    return null;
  }
  return iframe.contentDocument || iframe.contentWindow.document;
};

export const Realm = withRouter(({ location, className }) => {
  const { pathname } = location;

  if (location.pathname === '/') return null;

  const iframeRef = React.useRef();
  const { iframe } = parse(location.search);
  const route = [iframe ? 'http://www.local.twilio.com' : 'applications', ...resolve(pathname)].join('/')

  return <iframe ref={iframeRef} src={route} className={className}></iframe>;
});
