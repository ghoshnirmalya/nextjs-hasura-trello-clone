const setItem = (key: string, item: string) => {
  localStorage.setItem(key, item);
};

const getItem = (key: string) => {
  localStorage.getItem(key);
};

export { setItem, getItem };
