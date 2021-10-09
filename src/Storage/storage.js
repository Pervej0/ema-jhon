const sotrage = (key) => {
  const getItem = getStorage();

  let keyLists = {};
  if (!getItem) {
    keyLists[key] = 1;
  } else {
    keyLists = getItem;
    if (keyLists[key]) {
      const updatedKey = keyLists[key] + 1;
      keyLists[key] = updatedKey;
    } else {
      keyLists[key] = 1;
    }
  }
  // const stringyfied = JSON.stringify(keyLists);
  setSotrage(keyLists);

  // keyLists[key] = 1;
};

const getStorage = () => {
  const storage = JSON.parse(localStorage.getItem("products"));
  return storage;
};

const setSotrage = (value) => {
  const stringyfied = JSON.stringify(value);
  const storage = localStorage.setItem("products", stringyfied);
  return storage;
};

const removeStorage = (key) => {
  const getItem = getStorage();
  if (!getItem) {
  } else {
    delete getItem[key];
    setSotrage(getItem);
  }
};

const clearStorage = () => {
  localStorage.removeItem("products");
};

export { sotrage, getStorage, setSotrage, removeStorage, clearStorage };
