import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS } from '../constants';

export const getPhotos = year => dispatch => {
  dispatch({
    type: GET_PHOTO_REQUEST,
    payload: year
  });
  setTimeout(() => {
    dispatch({
      type: GET_PHOTO_SUCCESS,
      payload: [1, 2, 3, 4, 5]
    });
  }, 2000);
};
