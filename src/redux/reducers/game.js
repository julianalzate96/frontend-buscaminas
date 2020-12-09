import { handleActions } from "redux-actions"

const initState = {
    status: false,
    score: 0
};

export default handleActions({
    ["UPDATE_GAME_STATUS"]: (state, action) => ({
        ...state,
        status: action.value
    }),
    ["UPDATE_GAME_SCORE"]: (state, action) => ({
        ...state,
        score: state.score + action.value
    }),
  },
  initState
);
