import { combineReducers } from "redux";
import { Map, List } from "immutable";
import { IGithubUser, IGithubRepo } from "../../interfaces/GithubApi";

import users from "./users";
import currentUser from "./current-user";

export interface RootState {
  users: Map<string, List<IGithubUser>>;
  currentUser: Map<string, any>;
}

export default combineReducers({
  users,
  currentUser,
});
