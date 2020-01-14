import * as types from '../utils/ActionTypes';

const initialState = {
  token: localStorage.getItem('token') || null,
  email: null,
  senha: null,
};

const LoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SET_TOKEN:
      return { ...state, token: payload };
    case types.LOGIN_SET_EMAIL:
      return { ...state, email: payload };
    case types.LOGIN_SET_SENHA:
      return { ...state, senha: payload };
    case types.LOGIN_SET_EMAIL_SENHA:
      return { ...state, email: payload.email, senha: payload.senha };
    case types.INITIAL_STATE:
      return { ...state };
    default:
      return state;
  }
};

export default LoginReducer;
