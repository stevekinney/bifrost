import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { parse, stringify } from 'query-string';
import { useHistory } from 'react-router-dom';
import { NavUrl } from './NavUrl';
import sendMessage from './utilities/send-message';
import resolve from './utilities/resolve-pathname';

const getIframeDocument = (ref) => {
  const iframe = ref.current;
  if (!iframe) {
    return null;
  }
  return iframe.contentDocument || iframe.contentWindow.document;
};

export const Realm = withRouter(({ location, className }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { pathname, search, hash } = location;
  const [base, ...additionalSegments] = resolve(pathname);
  const iframeRef = React.useRef();
  const parsedSearch = parse(search);
  const { frame, consoleApp } = parsedSearch;

  let frameVal = frame;
  if(isFirstLoad && frame) {
    // remove frame so we can replace it with the current path
    // if the iframe was changing history with replace or push state
    // it will load to the same place on a page refresh or sharing a link
    const parsedSearchCopy = {...parsedSearch};
    parsedSearchCopy.frame = undefined;
    parsedSearchCopy.consoleApp = undefined;
    const newSearch = stringify(parsedSearchCopy);
    frameVal = `${pathname}${ newSearch ? `?${newSearch}` : '' }${hash}`;
    // NOTE: this mostly works, it needs to be tied into a shared history object (singleton perhaps)
    //       there's a bit more work to make this production ready:
    //       - its possible the second render of this happens before the replace state happens
    //       - might be better to set window.location on first load if there is a mismatch
    window.history.replaceState(window.history.state, '', NavUrl({ url: frameVal, consoleApp}));
    setIsFirstLoad(false);
  }
  let route;
  if (consoleApp === "true") {
    route = `${__IFRAME_HOST__}${decodeURIComponent(frameVal)}`;
  } else {
    route = ['applications', base].join('/')
  }
  return <iframe ref={iframeRef} src={route} className={className}></iframe>;
});
