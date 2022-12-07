import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import log from "../../../helpers/logger";
import { CurrentUserActionType } from "../../../enums/CurrentUserActionTypes";
import { IGithubUser, IGithubRepo } from "../../../interfaces/GithubApi";
import { setUserRepos, setUserId } from "../../actions/current-user";

export function* getUserDetailsSaga({
  payload,
}: {
  type: CurrentUserActionType;
  payload: { user: IGithubUser };
}) {
  yield log.info("[getUserDetails] fired...", payload);

  try {
    const repos: { data: IGithubRepo[] } = yield axios.get(
      payload.user.repos_url
    );

    yield put(setUserId(payload.user.id));
    yield put(setUserRepos(repos.data));
  } catch (err) {
    log.error("An error occured when fetching user details: ", err);
  }
}

export function* watchGetUserDetails() {
  log.info("[watchGetUserDetails] saga starting...");
  yield takeLatest(CurrentUserActionType.getDetails, getUserDetailsSaga);
}
