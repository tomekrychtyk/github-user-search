import { CurrentUserActionType } from "../../enums/CurrentUserActionTypes";
import { IGithubRepo, IGithubUser } from "../../interfaces/GithubApi";

export const setUserRepos = (repos: IGithubRepo[]) => {
  return {
    type: CurrentUserActionType.setRepos,
    payload: {
      repos,
    },
  };
};

export const getDetails = (user: IGithubUser) => {
  return {
    type: CurrentUserActionType.getDetails,
    payload: {
      user,
    },
  };
};

export const setUserId = (id: number) => {
  return {
    type: CurrentUserActionType.setId,
    payload: {
      id,
    },
  };
};
