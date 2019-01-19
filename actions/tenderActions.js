import { COMMIT_TENDER } from '../constants';

export const commitTender = tenders => dispatch => {
  dispatch({
    type: COMMIT_TENDER,
    payload: tenders
  });
};
