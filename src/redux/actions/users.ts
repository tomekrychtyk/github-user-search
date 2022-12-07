import { UsersActionType } from "../../enums/UsersActionTypes";
import { IGithubUser, IGithubUsers } from "../../interfaces/GithubApi";

export const getUsers = (
  searchString: string
): { type: UsersActionType; payload: { searchString: string } } => ({
  type: UsersActionType.getUsers,
  payload: {
    searchString,
  },
});

export const setUsers = (payload: { data: IGithubUsers }) => {
  return {
    type: UsersActionType.setUsers,
    payload: {
      users: payload,
    },
  };
};

export const getUserDetails = (user: IGithubUser) => {
  return {
    type: UsersActionType.getUserDetails,
    payload: {
      user,
    },
  };
};
