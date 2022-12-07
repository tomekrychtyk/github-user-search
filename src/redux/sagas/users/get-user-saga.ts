import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import log from "../../../helpers/logger";
import { setUsers } from "../../actions/users";
import { UsersActionType } from "../../../enums/UsersActionTypes";
import { IGithubUsers } from "../../../interfaces/GithubApi";

export function* getUsersSaga({
  payload,
}: {
  type: UsersActionType;
  payload: { searchString: string };
}) {
  yield log.info("[getUsersSaga] fired...", payload);

  try {
    const users: { data: IGithubUsers } = yield axios.get(
      `https://api.github.com/search/users?q=${payload.searchString}&per_page=5`
    );
    yield put(setUsers(users));
  } catch (err) {
    log.error("An error occured when fetching users: ", err);
  }
}

export function* watchGetUsers() {
  log.info("[watchGetUsers] saga starting...");
  yield takeLatest(UsersActionType.getUsers, getUsersSaga);
}
