export interface IGithubUser {
  login: string;
  id: number;
  gists_url: string;
  followers_url: string;
  following_url: string;
  avatar_url: string;
  repos_url: string;
}

export interface IGithubUsers {
  users: {
    data: {
      items: IGithubUser[];
    };
  };
}

export interface IGithubRepo {
  id: number;
  name: string;
  stargazers_count: number;
  watchers_count: number;
  url: string;
  html_url: string;
  forks_count: number;
}
