'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    window.localStorage.removeItem('css-cruise-theme');
    document.documentElement.dataset.theme = 'dark';
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="theme-toggle"
    >
      <span aria-hidden="true">{dark ? '☾' : '☀'}</span>
    </button>
  );
}
