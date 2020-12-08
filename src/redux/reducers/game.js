import { handleActions } from "redux-actions"

const initState = {
    status: false
};

export default handleActions({
    ["UPDATE_GAME_STATUS"]: (state, action) => ({
        ...state,
        status: action.value
    }),
  },
  initState
);
