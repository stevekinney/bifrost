const host = new RegExp(location.host);

const hasSameHost = (url) => {
  return host.test(url);
};

export default hasSameHost;
