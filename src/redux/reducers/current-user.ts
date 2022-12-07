import { List, Map } from "immutable";
import { ICurrentUserAction } from "../../interfaces/CurrentUserAction";
import { CurrentUserActionType } from "../../enums/CurrentUserActionTypes";

const INITIAL_STATE = Map({
  repos: List(),
  id: 0,
});

const reducer = (
  state = INITIAL_STATE,
  { type, payload }: ICurrentUserAction
) => {
  switch (type) {
    case CurrentUserActionType.setRepos: {
      return state.set("repos", List(payload.repos));
    }

    case CurrentUserActionType.setId: {
      const id = payload.id ?? 0;
      return state.set("id", id);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
