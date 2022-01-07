import { Search } from ".";
import { ThemeIcon } from "../ThemeIcon";
import styles from "./searchMobile.module.scss";

interface SearchMobileProps {
  toggleTheme: () => void;
  theme: string;
}

export function SearchMobile({ toggleTheme, theme }: SearchMobileProps) {
  return (
    <div className={styles.search__mobile}>
      <input
        type="checkbox"
        id="checkbox"
        className={`${styles.menu__checkbox} sr-only`}
      />

      <label
        htmlFor="checkbox"
        aria-label="Open the menu"
        className={styles.search__container}
        data-testid="open-menu"
      >
        <span aria-hidden="true" className={styles.search__icon}></span>
      </label>

      <label
        htmlFor="checkbox"
        aria-label="Close the menu"
        className={styles.close__menu}
        data-testid="close-menu"
      ></label>

      <div className={styles.menu__items}>
        <div
          data-testid="contain-theme_icon"
          className={styles.containerThemeIcon}
        >
          <ThemeIcon toggleTheme={toggleTheme} theme={theme} />
        </div>

        <nav className={styles.menu__items__links}>
          <Search htmlFor="search-mobile" />
        </nav>
      </div>
    </div>
  );
}
