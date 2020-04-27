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
  const [base, ...additionalSegments] = resolve(pathname);

  const { iframe } = parse(location.search);
  if (!iframe && !applications.includes(base)) return null;

  const iframeRef = React.useRef();

  let route
  if (iframe) {
    route = `${[__IFRAME_HOST__, base, ...additionalSegments].join('/')}?iframe=true`
  } else {
    // TODO: internal routes don't work
    route = ['applications', base].join('/')
  }

  return <iframe ref={iframeRef} src={route} className={className}></iframe>;
});
