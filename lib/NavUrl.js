import { parse, format } from 'url';

const urlWithParams = ({ url, params }) => {
  const urlObj = parse(url, true);
  urlObj.query = {
    ...urlObj.query,
    ...params
  };
  urlObj.search = undefined;
  return format(urlObj);
}

export const NavUrl = ({ url, parentOnly, consoleApp = false }) => {
  let frame;
  if (parentOnly) {
    const {query} = parse(document.location.href, true);
    frame = query.frame;
  } else { 
    const params = {};
    if(consoleApp) {
      params.disable_navigation = true
    }
    frame = urlWithParams({
      url,
      params,
    })
  }

  const newUrl = urlWithParams({
    url,
    params: {
      frame,
      consoleApp,
    }
  });
  return newUrl;
}
