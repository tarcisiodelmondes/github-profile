import Image from "next/image";
import { useContext } from "react";
import { ProfileFound } from "../components/Profile/ProfileFound";
import { ProfileNotFound } from "../components/Profile/ProfileNotFound";
import { ProfileContext } from "../contexts/ProfileContext";

import styles from "./home.module.scss";

export default function Home() {
  const { profile, hasError } = useContext(ProfileContext);

  return (
    <div className={styles.homepage}>
      {!profile && !hasError ? (
        <div className={styles.github__image}>
          <Image
            width={250}
            height={250}
            src="/github.png"
            alt="Image of github"
          />
        </div>
      ) : hasError ? (
        <ProfileNotFound />
      ) : (
        <ProfileFound />
      )}
    </div>
  );
}
