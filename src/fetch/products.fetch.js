export const fetchProducts = () => {
  const promise = fetch(`${process.env.REACT_APP_API_URL}`);

  return promise;
};
