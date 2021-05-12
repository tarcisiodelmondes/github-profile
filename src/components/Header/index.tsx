import Link from "next/link";
import { SearchDesktop } from "../Search/searchDesktop";
import { SearchMobile } from "../Search/searchMobile";

import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.content}>
        <h1>
          <Link href="/">
            <a>Github Profile</a>
          </Link>
        </h1>

        <SearchDesktop />
        <SearchMobile />
      </div>
    </header>
  );
}
