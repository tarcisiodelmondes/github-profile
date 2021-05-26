import Image from "next/image";
import { useContext } from "react";
import { Loading } from "../components/Loading";
import { ProfileFound } from "../components/Profile/ProfileFound";
import { ProfileNotFound } from "../components/Profile/ProfileNotFound";
import { LoadingContext } from "../contexts/LoadingContext";
import { ProfileContext } from "../contexts/ProfileContext";

import styles from "./home.module.scss";

export default function Home() {
  const { profile, hasError } = useContext(ProfileContext);

  const { isLoading } = useContext(LoadingContext);

  return (
    <div className={styles.homepage}>
      <Loading isLoading={isLoading} />
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
