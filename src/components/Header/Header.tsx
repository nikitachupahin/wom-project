import type React from "react";
import styles from "./Header.module.scss";
import { Logo } from "../Logo";

interface Props {
  isDarkMode: boolean;
  handleThemeMode: () => void;
}

export const Header: React.FC<Props> = ({ isDarkMode, handleThemeMode }) => {
  const themeHeaderClasses = `${styles["header__container"]} ${
    isDarkMode ? styles["header__container--dark"] : ""
  }`;

  const themeSwitcherClasses = `${styles["theme-switcher"]} ${
    isDarkMode ? styles["theme-switcher--dark"] : ""
  }`;

  return (
    <header className={styles.header}>
      <div className={themeHeaderClasses}>
        <Logo className={styles["header__logo"]} />

        <div className={styles["header__actions"]}>
          <button
            className={themeSwitcherClasses}
            onClick={handleThemeMode}
            aria-label="Toggle theme"
          >
            <div className={styles["theme-switcher__sun"]}>
              <svg
                className={styles["theme-switcher__sun-img"]}
                viewBox="0 0 24 24"
              >
                <path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"></path>
              </svg>
            </div>
            <div className={styles["theme-switcher__moon"]}>
              <svg
                className={styles["theme-switcher__moon-img"]}
                viewBox="0 0 24 24"
              >
                <path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41"></path>
                <path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2"></path>
              </svg>
            </div>
          </button>

          <button className={`${styles.btn} ${styles["btn--secondary"]}`}>
            Sign in
          </button>

          <button className={styles["burger-menu"]} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
