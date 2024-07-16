import React from 'react';
import { useDarkMode } from './UseContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`main ${darkMode ? 'dark' : 'light'}`}>
      <button
        className={`p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default DarkModeToggle;