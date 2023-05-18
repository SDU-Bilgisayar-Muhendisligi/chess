import React, { useEffect, useState } from "react";
import { IconBrush } from "@tabler/icons-react";
import '../App.css';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const evenDivs = document.querySelectorAll('#board .even div:nth-child(odd)');
    const oddDivs = document.querySelectorAll('#board .odd div:nth-child(even)');

    if (isDarkMode) {
      evenDivs.forEach((div) => {
        div.style.background = '#621700';
        div.style.transition = '2s';
      });

      oddDivs.forEach((div) => {
        div.style.background = '#621700';
        div.style.transition = '2s';
      });
    } else {
      evenDivs.forEach((div) => {
        div.style.background = '#779556';
        div.style.transition = '1s';
      });

      oddDivs.forEach((div) => {
        div.style.background = '#779556'; 
        div.style.transition = '1s';
      });
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
 
  return (
    <div className="mt-[-40px] flex justify-end relative">
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className={`btn ${isDarkMode ? "bi-brightness-high-fill" : "bi-moon"} px-5 mr-[310px]`}
      >
        <IconBrush className="swap-off m-auto block h-full" />
      </button>
    </div>
  );
}
