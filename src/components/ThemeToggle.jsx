import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import React icons

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2  rounded-full flex items-center justify-center"
    >
      {theme === 'light' ? (
        <FaMoon size={24} className="text-gray-800 dark:text-white" />
      ) : (
        <FaSun size={24} className="text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
