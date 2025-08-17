import { useState, useEffect, use } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = localStorage.getItem(key);
  console.log("Saved Value:", savedValue);
  if (savedValue) {
    return JSON.parse(savedValue);
  }
  return typeof initialValue === "function" ? initialValue() : initialValue;
}

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
}
