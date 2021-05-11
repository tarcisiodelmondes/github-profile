import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

import styles from "./searchComponent.module.scss";
import { api } from "../../services/api";
import { FormEvent, useContext, useRef } from "react";
import { formateDateProfile } from "../../utils/formateDateProfile";
import { ProfileContext } from "../../contexts/ProfileContext";

export function SearchComponent() {
  const { setError, setProfileData } = useContext(ProfileContext);

  const input = useRef(null);

  async function searchProfile(event: FormEvent) {
    event.preventDefault();

    const username: string = input.current.value;

    if (username.length === 0) return;

    try {
      const { data } = await api.get(`/users/${username}`);
      const repos = await api.get(`/users/${username}/repos`);

      setProfileData(formateDateProfile(data, repos.data));
      setError(false);
    } catch (error) {
      setProfileData(null);
      setError(true);
    }
  }

  return (
    <div className={styles.containerSearch}>
      <form className={styles.form}>
        <label htmlFor="username" className="sr-only">
          Search profile
        </label>

        <input
          ref={input}
          type="text"
          placeholder="Search profile"
          required
          className={styles.form__input}
        />

        <span className={styles.search__icon}>
          <AiOutlineSearch color="rgba(41, 35, 37, 0.5)" />
        </span>

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
