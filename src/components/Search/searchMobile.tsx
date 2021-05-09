import styles from "./searchMobile.module.scss";
import { SearchComponent } from "./searchComponent";

export function SearchMobile() {
  return (
    <div className={styles.search__mobile}>
      <input
        type="checkbox"
        id="checkbox"
        className={`${styles.menu__checkbox} sr-only`}
      />
      <label htmlFor="checkbox" className={styles.search__container}>
        <span className={styles.search__icon}></span>
      </label>
      <label htmlFor="checkbox" className={styles.close__menu}></label>

      <div className={styles.menu__items}>
        <nav className={styles.menu__items__links}>
          <SearchComponent />
        </nav>
      </div>
    </div>
  );
}
