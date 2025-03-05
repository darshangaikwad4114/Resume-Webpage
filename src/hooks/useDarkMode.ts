import { useState, useEffect } from 'react';

export function useDarkMode() {
  // Check if user has a system preference or previously set preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = storedDarkMode !== null ? JSON.parse(storedDarkMode) : prefersDark;

  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    // Update HTML class and store preference when dark mode changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Listen for changes in system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only change if user hasn't manually set a preference
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleDarkMode };
}
