import { handleActions } from "redux-actions"

const initState = {
  n: 5,
  m: 5,
  minas: 0,
  data:[]
};

export default handleActions({
    ["CREATE_MATRIZ"]: (state, action) => ({
        ...state,
        n: action.payload.n,
        m: action.payload.m,
        minas: action.payload.minas,
        data: action.payload.data
    }),
    ["UPDATE_MATRIZ"]: (state, action) => ({
      ...state,
      data: action.matriz
  })
  },
  initState
);
