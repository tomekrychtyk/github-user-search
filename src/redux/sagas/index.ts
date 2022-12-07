import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";

import { watchGetUsers } from "./users/get-user-saga";
import { watchGetUserDetails } from "./users/get-user-details-saga";

export default function* rootSaga() {
  yield all([watchGetUsers(), watchGetUserDetails()]);
}
