const sotrage = (key) => {
  const getItem = getStorgae();

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
  const stringyfied = JSON.stringify(keyLists);
  setSotrage(stringyfied);

  // keyLists[key] = 1;
};

const getStorgae = () => {
  const storage = JSON.parse(localStorage.getItem("products"));
  return storage;
};

const setSotrage = (value) => {
  const storage = localStorage.setItem("products", value);
  return storage;
};

export { sotrage, getStorgae, setSotrage };
