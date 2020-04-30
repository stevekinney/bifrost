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
  // fallback on current location if only want to set the frameUrl
  let frame;
  if (parentOnly) {
    const {query} = parse(document.location.href, true);
    console.log(query);
    frame = query.frame;
  } else { 
    frame = urlWithParams({
      url,
      params: {
        disable_navigation: true
      }
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
