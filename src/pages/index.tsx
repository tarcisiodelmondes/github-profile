import Image from "next/image";
import { useContext } from "react";
import { ProfileNotFound } from "../components/Profile/ProfileNotFound";
import { ProfileContext } from "../contexts/ProfileContext";

import styles from "./home.module.scss";

export default function Home() {
  const { profile, setProfile } = useContext(ProfileContext);

  return (
    <>
      {!profile ? (
        <div className={styles.container}>
          <Image
            width={250}
            height={250}
            src="/github.png"
            alt="Image of github"
          />
        </div>
      ) : profile.error ? (
        <ProfileNotFound />
      ) : (
        <h1>Hello world</h1>
      )}
    </>
  );
}
