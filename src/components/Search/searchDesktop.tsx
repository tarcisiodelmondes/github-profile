import { SearchComponent } from "./searchComponent";

import styles from "./searchDesktop.module.scss";

export function SearchDesktop() {
  return (
    <nav className={styles.search__desktop}>
      <SearchComponent />
    </nav>
  );
}
