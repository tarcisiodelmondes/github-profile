import { AiOutlineSearch } from "react-icons/ai";
import { BiSun, BiMoon } from "react-icons/bi";

import styles from "./searchComponent.module.scss";
import { api } from "../../services/api";
import { FormEvent, useContext, useRef } from "react";
import { formateDateProfile } from "../../utils/formateDateProfile";
import { ProfileContext } from "../../contexts/ProfileContext";
import { LoadingContext } from "../../contexts/LoadingContext";

interface SearchComponentProps {
  toggleTheme: () => void;
  theme: string;
}

export function SearchComponent({ toggleTheme, theme }: SearchComponentProps) {
  const { setError, setProfileData } = useContext(ProfileContext);

  const { toggleIsLoading } = useContext(LoadingContext);

  const input = useRef(null);

  async function searchProfile(event: FormEvent) {
    event.preventDefault();

    const username: string = input.current.value;

    if (username.length === 0) return;

    try {
      toggleIsLoading(true);
      const { data } = await api.get(`/users/${username}`);
      const repos = await api.get(`/users/${username}/repos`);

      setProfileData(formateDateProfile(data, repos.data));
      setError(false);

      toggleIsLoading(false);
    } catch (error) {
      toggleIsLoading(false);
      setProfileData(null);
      setError(true);
    }
  }

  return (
    <div className={styles.containerSearch}>
      <form className={styles.form}>
        <div className={styles.container__sun__icon}>
          {theme === "light" ? (
            <BiSun
              onClick={() => toggleTheme()}
              color="var(--white-3)"
              className={styles.sun__icon}
            />
          ) : (
            <BiMoon
              onClick={() => toggleTheme()}
              color="var(--white-3)"
              className={styles.sun__icon}
            />
          )}
        </div>

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
