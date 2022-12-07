import { UsersActionType } from "../enums/UsersActionTypes";
import { IGithubUsers } from "./GithubApi";

export interface IUsersAction {
  type: UsersActionType;
  payload: IGithubUsers;
}
