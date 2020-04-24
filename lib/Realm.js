import React from 'react';
import { withRouter } from 'react-router-dom';

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

  const [base, ...additionalSegments] = resolve(pathname);

  if (!applications.includes(base)) return null;

  const iframeRef = React.useRef();

  const route = ['applications', base].join('/');
  return <iframe ref={iframeRef} src={route} className={className}></iframe>;
});
