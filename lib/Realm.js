import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';

const getIframeDocument = (ref) => {
  const iframe = ref.current;
  if (!iframe) {
    return null;
  }
  return iframe.contentDocument || iframe.contentWindow.document;
};

export const Realm = withRouter(({ location, className }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { pathname, search } = location;
  const iframeRef = React.useRef();
  const { frame, consoleApp } = parse(search);
  if(isFirstLoad) {
    // TODO: use current path name + search (without the frame)
    //       to set the initial value of the frame
    setIsFirstLoad(false);
  }
  const route = consoleApp ? `${__IFRAME_HOST__}${decodeURIComponent(frame)}` : decodeURIComponent(frame);
  return <iframe ref={iframeRef} src={route} className={className}></iframe>;
});
