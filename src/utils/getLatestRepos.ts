type Repos = {
  name: string;
  description: string;
  created_at: number;
};

export function getLatestRepos(repos: Repos[]) {
  const lastFourRepos = repos
    .sort((a, b) => {
      if (a.created_at < b.created_at) return 1;
      if (a.created_at > b.created_at) return -1;
      return 0;
    })
    .slice(0, 4);

  return lastFourRepos;
}
