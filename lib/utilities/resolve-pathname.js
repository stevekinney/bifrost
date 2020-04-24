const resolve = (pathname) => {
  return pathname.split('/').filter((segment) => !!segment);
};

export default resolve;
