import { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage("darkMode");

     useEffect (() => {
         document.querySelector("body");
        storedValue ? 
        document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    }, [storedValue]);

     return [storedValue, setValue];
};  

export default useDarkMode; 