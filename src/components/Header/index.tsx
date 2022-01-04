import Link from "next/link";
import { Search } from "../Search";
import { SearchMobile } from "../Search/searchMobile";
import { ThemeIcon } from "../ThemeIcon";

import styles from "./styles.module.scss";

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export function Header({ toggleTheme, theme }: HeaderProps) {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.content}>
        <h1>
          <Link href="/">
            <a>Github Profile</a>
          </Link>
        </h1>

        <nav className={styles.containerNav}>
          <ThemeIcon toggleTheme={toggleTheme} theme={theme} />

          <span className={styles.containerSearch}>
            <Search />
          </span>
        </nav>

        <SearchMobile toggleTheme={toggleTheme} theme={theme} />
      </div>
    </header>
  );
}
