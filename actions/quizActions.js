import Axios from 'axios';

import {
  GET_QUESTIONS,
  COMMIT_ANSWER,
  GET_RESULTS,
  END_QUIZ
} from '../constants';

export const getQuestions = () => dispatch => {
  const res = Axios.get('/quizzes').then(r => r.data);
  return res.then(data =>
    dispatch({ type: GET_QUESTIONS, payload: data[0].quistions })
  );
};

export const commitAnswer = answer => dispatch => {
  dispatch({
    type: COMMIT_ANSWER,
    payload: answer
  });
};

export const endQuiz = () => dispatch =>
  dispatch({
    type: END_QUIZ
  });

export const getResults = answers => dispatch => {
  const post = Axios.post('/api/quiz', { answers }).then(r => r.data);
  return post.then(data =>
    dispatch({ type: GET_RESULTS, payload: data.results })
  );
};
