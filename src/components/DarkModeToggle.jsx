import { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    // Load saved preference or default to false
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-auto px-4 py-2 bg-gray-200 text-black dark:bg-gray-700 dark:text-white rounded shadow transition"
    >
      {dark ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}

export default DarkModeToggle;