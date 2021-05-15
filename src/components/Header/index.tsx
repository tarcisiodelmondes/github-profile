import Link from "next/link";
import { ReactNode } from "react";
import { SearchDesktop } from "../Search/searchDesktop";
import { SearchMobile } from "../Search/searchMobile";

import styles from "./header.module.scss";

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

        <SearchDesktop toggleTheme={toggleTheme} theme={theme} />
        <SearchMobile toggleTheme={toggleTheme} theme={theme} />
      </div>
    </header>
  );
}
