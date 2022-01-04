import { AiOutlineSearch } from "react-icons/ai";
import styles from "./search.module.scss";
import { FormEvent, useRef } from "react";

import { useRouter } from "next/router";

export function Search() {
  const router = useRouter();
  const input = useRef(null);

  async function searchProfile(event: FormEvent) {
    event.preventDefault();

    const username: string = input.current.value;

    if (username.length === 0) return;

    input.current.value = "";
    return router.push(`/profile/${username}`);
  }

  return (
    <div className={styles.containerSearch}>
      <form className={styles.form}>
        <label htmlFor="username" className="sr-only">
          Search profile
        </label>

        <div className={styles.containerInput}>
          <input
            ref={input}
            type="text"
            placeholder="Search profile"
            required
          />

          <span>
            <AiOutlineSearch className={styles.searchIcon} size={16} />
          </span>
        </div>

        <button
          className={styles.form__button}
          type="submit"
          onClick={(event) => searchProfile(event)}
        >
          Search
        </button>
      </form>
    </div>
  );
}
