import { GetServerSideProps } from "next";
import Image from "next/image";
import { api } from "../../services/api";
import { BsPeople } from "react-icons/bs";
import Link from "next/link";

import styles from "./styles.module.scss";
import { getLastFourFormattedRepos } from "../../utils/getLastFourFormattedRepos";

type Repos = {
  name: string;
  description: string;
  url_repo: string;
};

type ProfileData = {
  name: string;
  username: string;
  image: string;
  followers: number;
  following: number;
  repos: Repos[];
};

type ProfileProps = {
  profile: ProfileData;
};

export default function Profile({ profile }: ProfileProps) {
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
            <BsPeople
              data-testid="people_icon"
              className={styles.people_icon}
            />
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { username } = params;

  try {
    const { data } = await api.get(`/users/${username}`);

    const reposData = await api.get(`/users/${username}/repos`);
    const lastFourRepos = getLastFourFormattedRepos(reposData.data);

    const profile: ProfileData = {
      name: data.name,
      username: data.login,
      image: data.avatar_url,
      followers: data.followers,
      following: data.following,
      repos: lastFourRepos,
    };

    return {
      props: { profile },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/profile/404",
        permanent: false,
      },
    };
  }
};
