import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className={`theme ${isDarkTheme ? "dark-theme" : ""}`}>
      <button className="toggle-theme" onClick={toggleDarkTheme}>
        {isDarkTheme ? <FaMoon className="moon" /> : <IoSunny />}
      </button>
    </div>
  );
};

export default ThemeToggle;
