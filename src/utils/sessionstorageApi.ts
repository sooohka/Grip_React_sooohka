type Key = "search-query";

function saveState(key: Key, query: string) {
  sessionStorage.setItem(key, JSON.stringify(query));
}

function getState(key: Key) {
  try {
    const query = sessionStorage.getItem(key);
    if (query === null) {
      return undefined;
    }
    return JSON.parse(query);
  } catch (er) {
    return undefined;
  }
}

const sessionStorageApi = {
  saveState,
  getState,
};

export default sessionStorageApi;
