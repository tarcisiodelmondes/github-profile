import { AiOutlineSearch } from "react-icons/ai";
import styles from "./search.module.scss";
import { FormEvent, useState } from "react";

interface SearchProps {
  htmlFor: string;
}

import { useRouter } from "next/router";

export function Search({ htmlFor }: SearchProps) {
  const router = useRouter();
  const [username, setUsername] = useState("");

  async function searchProfile(event: FormEvent) {
    event.preventDefault();

    const user = username.trim();
    if (user.length === 0) return setUsername("");

    setUsername("");
    return router.push(`/profile/${user}`);
  }

  return (
    <div className={styles.containerSearch}>
      <form className={styles.form} onSubmit={searchProfile}>
        <label htmlFor={htmlFor} className="sr-only">
          Search profile
        </label>

        <div className={styles.containerInput}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id={htmlFor}
            placeholder="Search profile"
            required
          />

          <span>
            <AiOutlineSearch
              data-testid="search-svg"
              className={styles.searchIcon}
              size={16}
            />
          </span>
        </div>

        <button className={styles.form__button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
