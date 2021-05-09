import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

import styles from "./searchComponent.module.scss";

export function SearchComponent() {
  return (
    <>
      <div className={styles.containerSearch}>
        <form className={styles.form}>
          <label htmlFor="username" className="sr-only">
            Search profile
          </label>
          <input
            type="text"
            id="username"
            placeholder="Search profile"
            required
            className={styles.form__input}
          ></input>
          <span className={styles.search__icon}>
            <AiOutlineSearch color="rgba(41, 35, 37, 0.5)" />
          </span>
          <button className={styles.form__button} type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}
