import { BiMoon, BiSun } from "react-icons/bi";

import styles from "./styles.module.scss";

interface ThemeIconProps {
  toggleTheme: () => void;
  theme: string;
}

export function ThemeIcon({ theme, toggleTheme }: ThemeIconProps) {
  return (
    <div className={styles.containerThemeIcon}>
      {theme === "light" ? (
        <BiSun onClick={() => toggleTheme()} size={24} />
      ) : (
        <BiMoon onClick={() => toggleTheme()} size={24} />
      )}
    </div>
  );
}
