import { getLatestRepos } from "./getLatestRepos";

type DataProps = {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
};

type Repos = {
  name: string;
  description: string;
  html_url: string;
  created_at: number;
};

export function formateDateProfile(data: DataProps, repos: Repos[]) {
  const newRepo = getLatestRepos(repos);

  return {
    name: data.name,
    username: data.login,
    image: data["avatar_url"],
    followers: data.followers,
    following: data.following,
    repos: newRepo.map((repo) => {
      return {
        name: repo.name,
        description: repo.description,
        url_repo: repo["html_url"],
      };
    }),
  };
}
