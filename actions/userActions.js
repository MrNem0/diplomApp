import { REGISTRATION_USER } from '../constants';

export const registrationUser = values => dispatch => {
  dispatch({
    type: REGISTRATION_USER,
    payload: values
  });
};
