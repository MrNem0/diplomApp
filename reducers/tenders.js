import { COMMIT_TENDER, GET_TENDER } from '../constants';

const initialState = {
  tenders: []
};

export default function tenderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TENDER:
      return { ...state, tenders: payload };
    default:
      return state;
  }
}
