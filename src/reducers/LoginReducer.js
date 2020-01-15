import * as types from "../actionsType/index";

const initialState = {
  token: localStorage.getItem("token") || null
};

const LoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SET_SUCESS:
      return { ...state, token: payload };
    case types.LOGIN_SET_INITIAL_STATE:
      return { ...state };
    default:
      return state;
  }
};

export default LoginReducer;
