import { useState } from "react";
import { useDarkMode } from "/hooks/useDarkMode.js";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
  
    const setValue = value => {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    };
    return [storedValue, setValue];
  };

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }
}
export default Navbar;