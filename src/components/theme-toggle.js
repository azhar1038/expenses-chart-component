import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.firstElementChild.setAttribute("data-theme", newTheme);
  }
  return (
    <button
      className="theme-toggle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label={theme}
      aria-live="polite"
      onClick={toggleTheme}
    >
      <style jsx="true">{`
        .theme-toggle {
          --size: 2rem;

          background: none;
          box-shadow: none;
          border: 0;
          color: inherit;
          padding: 0;
          inline-size: var(--size);
          block-size: var(--size);
          aspect-ratio: 1;
          border-radius: 50%;
          cursor: pointer;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        .theme-toggle > svg {
          inline-size: 100%;
          block-size: 100%;
          stroke: none;
        }
        @media (hover: none) {
          .theme-toggle {
            --size: 40px;
          }
        }

        .sun-and-moon > :is(.sun, .moon, .sun-beams) {
          transform-origin: center center;
        }
        .sun-and-moon > .sun {
          transition: transform .5s ease-in-out;
        }
        .sun-and-moon > .sun-beams {
          stroke-width: 2px;
          transition: 
            transform .5s ease-in-out,
            opacity .5s ease-in-out
          ;
        }
        .sun-and-moon > .moon > circle {
          transition-duration: .5s;
        }
      `}</style>
      <style jsx="true" global="true">{`
        [data-theme="dark"] .sun-and-moon > .sun {
          transform: scale(1.75);
          transition-duration: .25s;
        }
        [data-theme="dark"] .sun-and-moon > .sun-beams {
          opacity: 0;
          transform: rotateZ(-25deg);
          transition-duration: .15s;
        }
        [data-theme="dark"] .sun-and-moon > .moon > circle {
          transform: translateX(-7px);
          transition-duration: .3s;
        }
      `}</style>
      <svg className="sun-and-moon" aria-hidden="true" height="24" width="24" viewBox="0 0 24 24">
        <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"/>
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" height="100%" width="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
      </svg>
    </button>
  )
}