import Image from "next/image";
import { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import { BsPeople } from "react-icons/bs";

import styles from "./profileFound.module.scss";
import Link from "next/link";

export function ProfileFound() {
  const { profile } = useContext(ProfileContext);

  return (
    <div className={styles.container}>
      <div className={styles.container__profile_info}>
        <div className={styles.container__profile_info__content}>
          <Image
            width={150}
            height={150}
            objectFit="cover"
            src={profile.image}
            alt={`Image of ${profile.name}`}
            className={styles.user_image}
          />

          <h1 className={styles.name}>{profile.name}</h1>

          <p className={styles.username}>{profile.username}</p>

          <p className={styles.followers__and__following}>
            <BsPeople className={styles.people_icon} />
            {profile.followers} followers - {profile.following} following
          </p>
        </div>
      </div>
      <div className={styles.container__repositories}>
        <h2 className={styles.heading__repositories}>Repositories:</h2>

        <div className={styles.repo__grid}>
          {profile.repos.map((repo) => {
            return (
              <div key={repo.name} className={styles.container__repo_data}>
                <h3 className={styles.repo__name}>
                  <Link href={repo.url_repo}>
                    <a target="_blank">{repo.name}</a>
                  </Link>
                </h3>

                <p className={styles.repo__description}>{repo.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
