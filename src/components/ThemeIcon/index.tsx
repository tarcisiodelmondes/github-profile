import { BiMoon, BiSun } from "react-icons/bi";

import styles from "./styles.module.scss";

interface ThemeIconProps {
  toggleTheme: () => void;
  theme: string;
}

export function ThemeIcon({ theme, toggleTheme }: ThemeIconProps) {
  return (
    <div
      className={styles.containerThemeIcon}
      data-testid="contain-icon"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? (
        <BiSun size={24} data-testid="sun" />
      ) : (
        <BiMoon size={24} data-testid="moon" />
      )}
    </div>
  );
}
