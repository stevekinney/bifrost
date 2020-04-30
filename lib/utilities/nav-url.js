const urlWithParams = ({ url, params }) => {
  const urlObj = parse(url, true);
  urlObj.query = {
    ...urlObj.query,
    ...params
  };
  return urlObj.format();
}

export const NavUrl = ({ url, consoleApp = false }) => {
  let frame = url;
  if(consoleApp) {
    frame = urlWithParams({
      url,
      params: {
        disable_navigation: true
      }
    })
  }
  return urlWithParams({
    url,
    params: {
      frame,
      consoleApp,
    }
  });
}
