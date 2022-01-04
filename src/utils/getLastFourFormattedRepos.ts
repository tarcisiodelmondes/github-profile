type Repos = {
  name: string;
  description: string;
  url_repo: string;
  created_at: number;
};

export function getLastFourFormattedRepos(
  repos: Repos[]
): Array<Omit<Repos, "created_at">> {
  const lastFourRepos = repos
    .sort((a, b) => {
      if (a.created_at < b.created_at) return 1;
      if (a.created_at > b.created_at) return -1;
      return 0;
    })
    .slice(0, 4);

  const formattedLastFourRepos = lastFourRepos.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      url_repo: repo["html_url"],
    };
  });

  return formattedLastFourRepos;
}
