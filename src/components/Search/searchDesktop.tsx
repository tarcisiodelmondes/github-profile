import { SearchComponent } from "./searchComponent";

import styles from "./searchDesktop.module.scss";

interface SearchDesktopProps {
  toggleTheme: () => void;
  theme: string;
}

export function SearchDesktop({ toggleTheme, theme }: SearchDesktopProps) {
  return (
    <nav className={styles.search__desktop}>
      <SearchComponent toggleTheme={toggleTheme} theme={theme} />
    </nav>
  );
}
