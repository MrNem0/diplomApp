import Axios from 'axios';

import { GET_QUESTIONS } from '../constants';

export const getQuestions = () => dispatch => {
  const res = Axios.get('/api/quiz').then(r => r.data);
  return res.then(data =>
    dispatch({ type: GET_QUESTIONS, payload: data.quiz })
  );
};
