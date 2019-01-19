import { REGISTRATION_USER } from '../constants';

const initialState = {
  userInfo: []
};

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTRATION_USER:
      return { ...state, userInfo: [...state.userInfo, payload] };
    default:
      return state;
  }
}
