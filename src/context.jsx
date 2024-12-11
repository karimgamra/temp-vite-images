import { createContext, useContext, useState } from "react";

const globalContext = createContext();

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme((pervTheme) => {
      const newTheme = !pervTheme;
      localStorage.setItem("isDarkTheme", JSON.stringify(newTheme)); // Save to localStorage
      return newTheme;
    });
  };
  const setTheme = () => {};
  return (
    <globalContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchQuery,
        setSearchQuery,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
export default AppContext;
export const useGlobalContext = () => {
  return useContext(globalContext);
};
