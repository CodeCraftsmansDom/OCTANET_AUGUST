// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(prevMode => !prevMode)}
      className="theme-toggle"
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;  // Ensure this is a default export
