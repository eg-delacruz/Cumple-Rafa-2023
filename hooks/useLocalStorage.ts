import { useState } from 'react';

// Gets a key and a value and saves it to local storage, returning the saved value and a function to update it
const useLocalStorage = (key: string, value: Object) => {
  // If the key is not in local storage, set it to the value passed in
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return value;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : value;
    } catch (error) {
      console.log(error);
      return value;
    }
  });

  // Updates the value in local storage
  const setLocalStorage = (value: string) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setLocalStorage];
};

export default useLocalStorage;
