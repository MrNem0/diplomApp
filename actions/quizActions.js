import Axios from 'axios';

import { GET_QUESTIONS, COMMIT_ANSWER } from '../constants';

export const getQuestions = () => dispatch => {
  const res = Axios.get('/api/quiz').then(r => r.data);
  return res.then(data =>
    dispatch({ type: GET_QUESTIONS, payload: data.quiz })
  );
};

export const commitAnswer = answer => dispatch => {
  dispatch({
    type: COMMIT_ANSWER,
    payload: answer
  });
};
