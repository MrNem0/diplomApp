import { COMMIT_TENDER } from '../constants';

const initialState = {
  tenderInfo: {}
};

export default function tenderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case COMMIT_TENDER:
      return { ...state, tenderInfo: { ...state.tenderInfo, payload } };
    default:
      return state;
  }
}
