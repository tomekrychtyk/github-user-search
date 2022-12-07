import { List, Map } from "immutable";
import { IUsersAction } from "../../interfaces/UsersActions";
import { UsersActionType } from "../../enums/UsersActionTypes";

export const INITIAL_STATE = Map({
  loading: false,
  list: List(),
});

const reducer = (state = INITIAL_STATE, { type, payload }: IUsersAction) => {
  switch (type) {
    case UsersActionType.getUsers: {
      return state.set("loading", true);
    }

    case UsersActionType.setUsers: {
      return state
        .set("list", List(payload.users.data.items))
        .set("loading", false);
    }

    default: {
      return state;
    }
  }
};

export default reducer;
