import { CurrentUserActionType } from "../enums/CurrentUserActionTypes";
import { IGithubRepo } from "./GithubApi";

export interface ICurrentUserAction {
  type: CurrentUserActionType;
  payload: {
    repos?: IGithubRepo[];
    id?: number;
  };
}
